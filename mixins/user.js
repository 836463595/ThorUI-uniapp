// user mixin 必须得同时和 page mixin 同时使用

import userAPI from '@/api/user.js';

export default {
	data() {
		return {
			userAPI: new userAPI(),
		}
	},
	methods: {
		// 获取移动端用户mqtt通信账号密码
		async getMobileConfig(alerted = true) {
			const [err, res] = await this.userAPI.get("/getMobileConfig");
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 查询剩余流量通过卡号
		async restFlowByCcid(info,alerted = true) {
			const [err, res] = await this.userAPI.get("/restFlowByCcid",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 用户信息
    async userInfo(alerted = true) {
    	const [err, res] = await this.userAPI.get("/userInfo");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 获取用户保存设置
    async getUserSetting(alerted = true) {
    	const [err, res] = await this.userAPI.post("/getUserSetting");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 更改用户设置
    async editUserSetting(info,alerted = true) {
    	const [err, res] = await this.userAPI.post("/editUserSetting",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 是否有查看原始数据权限
    async hasOriginData(alerted = true) {
    	const [err, res] = await this.userAPI.get("/hasOriginData");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    }
	}
}
