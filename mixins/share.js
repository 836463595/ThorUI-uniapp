// share mixin 必须得同时和 page mixin 同时使用

import shareAPI from '@/api/share.js';

export default {
	data() {
		return {
			shareAPI: new shareAPI(),
		}
	},
	methods: {
		// 获取分享链接
		async getShareUrl(info, alerted = true) {
			const [err, res] = await this.shareAPI.post("/getShareUrl",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		}
	}
}
