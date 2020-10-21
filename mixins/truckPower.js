// truckPower mixin 必须得同时和 page mixin 同时使用

import truckPowerAPI from '@/api/truckPower.js';

export default {
	data() {
		return {
			truckPowerAPI: new truckPowerAPI(),
		}
	},
	methods: {
		// 查询车系信息
		async select(info,alerted = true) {
			const [err, res] = await this.truckPowerAPI.post("/select",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},

	}
}
