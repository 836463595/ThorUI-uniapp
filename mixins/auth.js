// auth mixin 必须得同时和 page mixin 同时使用

import authAPI from '@/api/auth.js';

export default {
	data() {
		return {
			authAPI: new authAPI(),
		}
	},
	methods: {
		// 查询是否实名通过手机号码
		async isRealNameByMobile(mobile, alerted = true) {
			const [err, res] = await this.authAPI.post("/isRealNameByMobile?mobile="mobile);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		}
	}
}
