// doc mixin 必须得同时和 page mixin 同时使用

import docAPI from '@/api/doc.js';

export default {
	data() {
		return {
			docAPI: new docAPI(),
		}
	},
	methods: {
		// 维修案例 分页查询数据
		async getFixCaseList(info, alerted = true) {
			const [err, res] = await this.docAPI.post("/fixCase/getFixCaseList",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 维修案例详情
		async getFixCaseDetailById(info, alerted = true) {
			const [err, res] = await this.docAPI.get("/fixCaseDetail/getFixCaseDetailById",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 故障码详情
		async getCodeDetail(info, alerted = true) {
			const [err, res] = await this.docAPI.get("/errorcode/detail",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 查询故障码
		async searchCode(info, alerted = true) {
			const [err, res] = await this.docAPI.get("/errorcode/select",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
	}
}
