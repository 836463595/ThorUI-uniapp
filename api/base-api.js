import Request from '@/common/request/index.js';

export default class BaseAPI {
    // 构建网络请求对象
    constructor() {
        //请求公共地址
        this.pathURL = '/';
        this._limit = 10;
        this._start = 0;
        this._sort = 'createdAt:desc'
        this._request = this.getRequest(); 
        // 局部拦截器默认值初始化一次
        if (this._request.interceptors.scoped.response.handlers.length == 0) {
            this._request.interceptors.scoped.response.use(this.resInterceptorSuccess(), this.resInterceptorFail());
        }
    }
    
    // 接口方法
    getRequest() {
        throw new Error(`getRequest() Must be implement by ${this.constructor.name}.js`);
    }
    
    resInterceptorSuccess() {
        return (res, config) => {
            return res;
        }
    }

    resInterceptorFail() {
        return (err) => {
            return Promise.reject(err);
        }
    }
    // 网络调用
    get(path, params = {}) {
        // if (params._sort === '') {
        //     delete params._sort;
        // } else {
        //     params._sort = params._sort || this._sort;
        // }
		// encodeURI
		for (const key of Object.keys(params)) {
			params[key] = encodeURI(params[key]);
		}
        let instance = this._request.request({
            url: this.pathURL + path,
            method: 'get',
            params: params,
        });
		
        return instance.then(result => [null, result]).catch(error => [error]);
    }

    getDetail(id) {
        let instance = this._request.request({
            url: this.pathURL + '/' + id,
            method: 'get',
        });
        return instance.then(result => [null, result]).catch(error => [error]);
    }

    post(path, payload = {}) {
        let instance = this._request.request({
            url: this.pathURL + path,
            method: 'post',
            data: payload
        });
        return instance.then(result => [null, result] ).catch(error => [error]);
    }

    put(id, payload = {}) {
        let instance = this._request.request({
            url: this.pathURL + '/' + id,
            method: 'put',
            data: payload
        });
        return instance.then(result => [null, result]).catch(error => [error]);
    }

    delete(id) {
        let instance = this._request.request({
            url: this.pathURL + '/' + id,
            method: 'delete'
        });
        return instance.then(result => [null, result]).catch(error => [error]);
    }
}
