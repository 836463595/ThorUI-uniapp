// truck mixin 必须得同时和 page mixin 同时使用

import truckAPI from '@/api/truck.js';

export default {
	data() {
		return {
			truckAPI: new truckAPI(),
		}
	},
	methods: {
		// 根据设备编号获取车辆信息
		async getTruckInfoByEquipNo(equipNo, alerted = true) {
			const [err, res] = await this.truckAPI.post("/getTruckInfoByEquipNo?equipNo="+equipNo);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 根据设备编号获取车辆信息
    async getTruckInfoByID(truckId, alerted = true) {
    	const [err, res] = await this.truckAPI.post("/getTruckInfoByID?truckId="+truckId);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
		// 修改车辆信息
		async updateTruckInfo(info, alerted = true) {
			const [err, res] = await this.truckAPI.post("/updateTruckInfo",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 添加到跟车列表
		async addFollowTruck(info, alerted = true) {
			const [err, res] = await this.truckAPI.post("/addFollowTruck",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 添加体验
		async addExperience(mobile, province, alerted = true) {
			const [err, res] = await this.truckAPI.post("/addExperience?mobile="+mobile+"&province="+province);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 检查微信分享车辆是否正确
    async checkWxShareTruck(truckNo, equipNo, alerted = true) {
    	const [err, res] = await this.truckAPI.post("/checkWxShareTruck?truckNo="+truckNo+"&equipNo="+equipNo);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    }
	}
}
