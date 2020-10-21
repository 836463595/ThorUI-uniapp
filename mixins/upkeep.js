// upkeep mixin 必须得同时和 page mixin 同时使用

import upkeepAPI from '@/api/upkeep.js';

export default {
	data() {
		return {
			upkeepAPI: new upkeepAPI(),
		}
	},
	methods: {
		// 添加保养单
		async addUpkeepList(info,alerted = true) {
			const [err, res] = await this.upkeepAPI.post("/addUpkeepList",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 添加保养车辆
    async addUpkeepTruck(info,alerted = true) {
    	const [err, res] = await this.upkeepAPI.post("/addUpkeepTruck",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 获取我可以添加的所有车辆列表
    async getAllTrucks(alerted = true) {
    	const [err, res] = await this.upkeepAPI.get("/getAllTrucks");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 保养车辆列表
    async getUpkeepTrucks(alerted = true) {
    	const [err, res] = await this.upkeepAPI.get("/getUpkeepTrucks");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 移除保养车辆
    async removeUpkeepTruck(truckId,alerted = true) {
    	const [err, res] = await this.upkeepAPI.post("/removeUpkeepTruck?truckId="+truckId);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 保养单列表
    async upkeepLists(info,alerted = true) {
    	const [err, res] = await this.upkeepAPI.get("/upkeepLists",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 修改保养设置
    async updateUpkeepTruck(info,alerted = true) {
    	const [err, res] = await this.upkeepAPI.post("/updateUpkeepTruck",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 获取保养信息
    async getUpkeepById(info,alerted = true) {
    	const [err, res] = await this.upkeepAPI.get("/getUpkeepById",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    }
	}
}
