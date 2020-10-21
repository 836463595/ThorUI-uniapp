// system mixin 必须得同时和 page mixin 同时使用

import systemAPI from '@/api/system.js';

export default {
	data() {
		return {
			systemAPI: new systemAPI(),
		}
	},
	methods: {
		// 验证图片验证码
		async verifyImgCode(info, alerted = true) {
			const [err, res] = await this.systemAPI.get("/verifyImgCode",{
				key: info.key,
				imgCode: info.imgCode
			});
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取短信验证码
		async getSmsCode(info, alerted = true) {
			const [err, res] = await this.systemAPI.get("/getSmsCode",{
				mobile: info.mobile,
				key: info.key,
				imgCode: info.imgCode
			});
			console.log(res)
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取专家列表
		async getExperts(alerted = true) {
			const [err, res] = await this.systemAPI.get("/getExperts");
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取视频列表
		async appVedios(alerted = true) {
			const [err, res] = await this.systemAPI.post("/appVedios");
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
	}
}
