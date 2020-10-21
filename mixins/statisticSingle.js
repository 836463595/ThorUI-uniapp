// statisticSingle mixin 必须得同时和 page mixin 同时使用

import statisticSingleAPI from '@/api/statisticSingle.js';

export default {
	data() {
		return {
			statisticSingleAPI: new statisticSingleAPI(),
		}
	},
	methods: {
		// 根据设备编号和分页信息获取车辆行程
		async getTruckTripList(info, equipNo, alerted = true) {
			const [err, res] = await this.statisticSingleAPI.post("/getTruckTripList?equipNo="+equipNo, info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 生成excel
    async generatorExcel(info, alerted = true) {
    	const [err, res] = await this.statisticSingleAPI.post("/generatorExcel", info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 每日数据
    async dailyData(info, equipNo, alerted = true) {
    	const [err, res] = await this.statisticSingleAPI.post("/dailyData?equipNo="+equipNo, info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 区间数据
    async intervalData(info, equipNo, alerted = true) {
    	const [err, res] = await this.statisticSingleAPI.post("/intervalData?equipNo="+equipNo, info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 汇总数据
    async totalData(info, equipNo, alerted = true) {
    	const [err, res] = await this.statisticSingleAPI.post("/totalData?equipNo="+equipNo, info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 获取统计区间列表
    async getItemInterval(alerted = true) {
    	const [err, res] = await this.statisticSingleAPI.get("/getItemInterval");
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 通过行程编号过去得到车辆相信信息
    async getTruckTripById(truckTripId, alerted = true) {
    	const [err, res] = await this.statisticSingleAPI.post("/getTruckTripById?truckTripId="+truckTripId);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    }
	}
}
