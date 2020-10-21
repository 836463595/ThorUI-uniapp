// truckConfig mixin 必须得同时和 page mixin 同时使用

import truckConfigAPI from '@/api/truckConfig.js';

export default {
	data() {
		return {
			truckConfigAPI: new truckConfigAPI(),
		}
	},
	methods: {
		// 发动机列表
		async getEngineList(alerted = true) {
			const [err, res] = await this.truckConfigAPI.get("/getEngineList");
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 车辆品牌列表
    async getBrandList(alerted = true) {
    	const [err, res] = await this.truckConfigAPI.get("/getBrandList");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    }
	}
}
