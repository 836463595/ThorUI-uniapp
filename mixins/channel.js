// channel mixin 必须得同时和 page mixin 同时使用

import channelAPI from '@/api/channel.js';

export default {
	data() {
		return {
			channelAPI: new channelAPI(),
		}
	},
	methods: {
		// 用户申请加入组织 通过分享
		async userApplyByShare(info, alerted = true) {
			const [err, res] = await this.channelAPI.post("/userApplyByShare", info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 搜索组织 type 1:名称 2：管理员手机号 3：组织编号,
		async searchChannel(info, alerted = true) {
			const [err, res] = await this.channelAPI.post("/searchChannel?value="+info.value+"&type="+info.type);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		}
	}
}
