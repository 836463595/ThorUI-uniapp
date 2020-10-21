// auth mixin 必须得同时和 page mixin 同时使用

import medicalRecordAPI from '@/api/medicalRecord.js';

export default {
	data() {
		return {
			medicalRecordAPI: new medicalRecordAPI(),
		}
	},
	methods: {
		//获取标准数据流
		async getNormalList(info, alerted = true) {
			const [err, res] = await this.medicalRecordAPI.post("/getNormalList", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		}

	}
}
