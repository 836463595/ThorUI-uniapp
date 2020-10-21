import {
		ApiUrl
	} from '@/config/env.js';
import Interceptor from './core/interceptor';
import Request from './index';
import store from '../../store/index.js'

import webview from '@/common/uni-webview/uni.webview.js'


export const globalInterceptor = {
    request: new Interceptor(),
    response: new Interceptor()
};

/**
 * 全局配置
 * 只能配置 静态数据
 * `content-type` 默认为 application/json
 * header 中`content-type`设置特殊参数 或 配置其他会导致触发 跨域 问题，出现跨域会直接进入响应拦截器的catch函数中
 */
export const config = () => {
    const config = {
        baseURL: ApiUrl,
        header: {},
    }
	
	// const guidVal = uni.getStorageSync('guid_key');
	// const author = uni.getStorageSync('Authorization');
    config.header['Authorization'] = store.state.authorization;
    config.header['Cid'] = store.state.cid;
	
    return config;
};

/**
 * 全局 请求拦截器
 * 例如: 配置token
 *
 * `return config` 继续发送请求
 * `return false` 会停止发送请求，不会进入错误数据拦截，也不会进入请求对象中的catch函数中
 * `return Promise.reject('xxxxx')` 停止发送请求, 会错误数据拦截，也会进入catch函数中
 *
 * @param {Object} config 发送请求的配置数据
 */
globalInterceptor.request.use(
    (config) => {
        console.log('request ==>  ' + config.method + '  ===>  ' + config.instanceURL + '  <====== ')
        console.log(config);
        return config;
    },
    (err) => {
        console.error('is global fail request interceptor: ', err);
        return false;
    }
);

/**
 * 全局 响应拦截器
 * 例如: 根据状态码选择性拦截、过滤转换数据
 *
 * `return res` 继续返回数据
 * `return false` 停止返回数据，不会进入错误数据拦截，也不会进入catch函数中
 * `return Promise.reject('xxxxx')` 返回错误信息, 会错误数据拦截，也会进入catch函数中
 *
 * @param {Object} res 请求返回的数据
 * @param {Object} config 发送请求的配置数据
 * @return {Object|Boolean|Promise<reject>}
 */
globalInterceptor.response.use(
    async (res, config) => {
            // 跳过 `request().download()` 这个拦截
            if (typeof res.tempFilePath !== 'undefined') {
                return res;
            }
            const { data, statusCode } = res;
            try {
                return await handleCode({ data, statusCode, config });
            } catch (err) {
                return Promise.reject(err);
            }
        },
        (err, config) => {
            console.log('response ==>  ' + config.method + '  ===>  ' + config.instanceURL + '  <====== ');
            // console.error('err: ', err);
            return Promise.reject(err);
        }
);

/**
 * 处理 http状态码
 * @param {object} o
 * @param {object} o.data 请求返回的数据
 * @param {object} o.config 本次请求的config数据
 * @param {string|number} o.code http状态码
 * @return {object|Promise<reject>}
 */
function handleCode({ data, statusCode, config }) {
	console.log('response ==>  ' + config.method + '  ===>  ' + config.instanceURL + '  <====== ')
	console.log(data);
    const code = data.code;
    const STATUS = {
        '200'() {
    		console.log('200------请求成功');
    		// 成功返回data或list数据
            if (code == 'SYS.SUCCESS') {
              let resData;
              // totalCount不为空则为list类型数据，否则都是data数据
              if(data.totalCount != null && data.totalCount != 'null'){
                resData = {
                  data: data.list,
                  totalCount: data.totalCount
                }
              }else{
                resData = {
                  data: data.data
                }
              }
              // if(!resData.data) resData.data = true;
              return resData;
            } else if (code == 'BIZ.BUSSINESS_EXCEPTION') {
    			// 业务异常，抛出异常
    			let msg = data.msg
    			if(data.msg.indexOf('服务调用异常') != -1){
    				msg = '服务异常'
    			}
                return Promise.reject({ code, message: msg });
            } else if (code == 'SYS.UNKNOWN_EXCEPTION') {
                return Promise.reject({ code, message: '未知异常' });
            } else {
    			// 其他异常
                return Promise.reject({ code, message: '服务异常' });
            }
            return data;
        },
    	'401'(){
    		console.log('401------token失效');
    		if (code == '401') {
    			// // 跳到登录
    			// uni.reLaunch({
    			// 	url: '/pages/user/login/login'
    			// })
    			// // TODO: lxj token过期处理, 不应该是401
    			// const $store = getVuexStore();
    			// if ($store) {
    			// 	$store.commit('clearUserInfo');
    			// }
    			return Promise.reject({ code, message: '登录失效' });
    		}
    	},
    	'404'(){
    		console.log('404------未找到');
    		return data;
    	}
    };
    return STATUS[statusCode] ? STATUS[statusCode]() : Promise.reject(data, config); // 有状态码但不在这个封装的配置里，就直接进入 `fail`
}

// 获取vuex实例
function getVuexStore() {
    const app = getApp({allowDefault: true});
    if (app) {
        const $store = app.globalData.$store;
        return $store;
    }
    return null;
}
