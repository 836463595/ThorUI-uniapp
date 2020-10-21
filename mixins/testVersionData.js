// testVersionDataAPI mixin 必须得同时和 page mixin 同时使用

import testVersionDataAPI from '@/api/testVersionData.js';

export default {
	data() {
		return {
			testVersionDataAPI: new testVersionDataAPI(),
		}
	},
	methods: {
		// 查询发动机信息
		async getVersionList(info, alerted = true) {
			const [err, res] = await this.testVersionDataAPI.get("/getVersionList", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 根据版本和数据类型查询数据
		async getVersionDataList(info, alerted = true) {
			const [err, res] = await this.testVersionDataAPI.get("/getVersionDataList", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 发送非开关测试数据到相应的设备
		async sendNonswitchVersionTestData(info, alerted = true) {
			const [err, res] = await this.testVersionDataAPI.post("/sendNonswitchVersionTestData", info);	
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 发送开关测试数据到相应的设备
		async sendSwitchVersionTestData(info, alerted = true) {
			const [err, res] = await this.testVersionDataAPI.post("/sendSwitchVersionTestData", info);	
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 设为已校对
		async updateVersionVerify(info, alerted = true) {
			const [err, res] = await this.testVersionDataAPI.post("/updateVersionVerify", info);	
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取步骤状态
		async getVersionDataStatus(info, alerted = true) {
			const [err, res] = await this.testVersionDataAPI.get("/getVersionDataStatus", info);	
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 结束校对
		async endVersionTest(info, alerted = true) {
			const [err, res] = await this.testVersionDataAPI.get("/endVersionTest", info);	
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 校对成功  标识
		async proofreadOk(info, alerted = true) {
			const [err, res] = await this.testVersionDataAPI.get("/proofreadOk", info);	
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		}
	}
}
