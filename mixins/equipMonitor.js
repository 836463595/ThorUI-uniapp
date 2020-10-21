// equipMonitor mixin 必须得同时和 page mixin 同时使用

import equipMonitorAPI from '@/api/equipMonitor.js';

export default {
	data() {
		return {
			equipMonitorAPI: new equipMonitorAPI(),
		}
	},
	methods: {
		// 获取监听数据流列表
		async getMethodList(info,alerted = true) {
			const [err, res] = await this.equipMonitorAPI.get("/getMethodList",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		}
	}
}
