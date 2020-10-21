// truckEngineAPI mixin 必须得同时和 page mixin 同时使用

import truckEngineAPI from '@/api/truckEngine.js';

export default {
	data() {
		return {
			truckEngineAPI: new truckEngineAPI(),
		}
	},
	methods: {
		// 搜索版本号
		async selectByNameAndEngineID(info,alerted = true) {
			const [err, res] = await this.truckEngineAPI.post("/selectByNameAndEngineID?name="+info.name+"&engineId="+info.engineId+"&truckDeviceType="+info.truckDeviceType);
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 查询发动机信息
		async selectEngineByPowerID(info,alerted = true) {
			const [err, res] = await this.truckEngineAPI.get("/selectEngineByPowerID",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},

	}
}
