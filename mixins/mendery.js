// mendery mixin 必须得同时和 page mixin 同时使用

import menderyAPI from '@/api/mendery.js';

export default {
	data() {
		return {
			menderyAPI: new menderyAPI(),
		}
	},
	methods: {
		// 检查是否能创建门店
		async checkCanCreate(alerted = true) {
			const [err, res] = await this.menderyAPI.post("/checkCanCreate");
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 创建门店
    async create(info, alerted = true) {
    	const [err, res] = await this.menderyAPI.post("/create", info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 修改门店信息
    async edit(info, alerted = true) {
    	const [err, res] = await this.menderyAPI.post("/edit", info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 修理部位选择列表
    async fixPartList(alerted = true) {
    	const [err, res] = await this.menderyAPI.post("/fixPartList");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 修理类型选择列表
    async fixTypeList(alerted = true) {
    	const [err, res] = await this.menderyAPI.post("/fixTypeList");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 附近门店列表
    async list(info, alerted = true) {
    	const [err, res] = await this.menderyAPI.post("/list", info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 我的门店,有审核中的部分
    async myMendery(alerted = true) {
    	const [err, res] = await this.menderyAPI.post("/myMendery");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 修改 创建门店 重新认证
    async updateCreate(info, alerted = true) {
    	const [err, res] = await this.menderyAPI.post("/updateCreate", info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    }
	}
}
