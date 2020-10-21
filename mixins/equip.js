// equip mixin 必须得同时和 page mixin 同时使用

import equipAPI from '@/api/equip.js';

export default {
	data() {
		return {
			equipAPI: new equipAPI(),
		}
	},
	methods: {
		// 获取设备MQTT配置
		async getEquipConfig(info, alerted = true) {
			const [err, res] = await this.equipAPI.get("/getEquipConfig",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取设备故障码
		async getEquipErrorCode(info, alerted = true) {
			const [err, res] = await this.equipAPI.get("/getEquipErrorCode",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 查询剩余流量通过卡号
		async restFlowByEquipNo(info, alerted = true) {
			const [err, res] = await this.equipAPI.get("/restFlowByEquipNo",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取设备最新的数据流
		async getEquipFlowData(info, alerted = true) {
			const [err, res] = await this.equipAPI.get("/getEquipFlowData",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		}
	}
}
