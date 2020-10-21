// equipDiagnose mixin 必须得同时和 page mixin 同时使用

import equipDiagnoseAPI from '@/api/equipDiagnose.js';

export default {
	data() {
		return {
			equipDiagnoseAPI: new equipDiagnoseAPI(),
		}
	},
	methods: {
		// 判断能否进入诊断页, intoType:0-> 监控(跟车)列表进入, 1 -> 一键诊断
		async canIntoMedicalPage(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.post(`/canIntoMedicalPage?equipNo=${info.equipNo}&intoType=${info.intoType}`);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 故障码操作（参数：equipNo,type,deviceType） （type 0:读当前故障信息 1:读历史故障码 2:清除故障码）（deviceType ECU/DCU）
		async dtcOperation(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.get("/dtcOperation",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取诊断数据流列表 deviceType:ECU,DCU
		async getMethodList(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.get("/getMethodList",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			
			return res;
		},
		// 获取诊断数据流最大项数 deviceType:ECU,DCU
		async getMaxSelectCounts(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.get("/getMaxSelectCounts",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			
			return res;
		},
		// 进入诊断页, intoType:0-> 监控(跟车)列表进入, 1 ->一键诊断, 返回流水号
		async intoMedicalPage(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.post("/intoMedicalPage?equipNo="+info.equipNo+"&intoType="+info.intoType);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			
			return res;
		},
		// 保持数据流诊断心跳
		async keepDiagnoseFlowData(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.post("/keepDiagnoseFlowData?equipNo="+info.equipNo+"&deviceType="+info.deviceType);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			
			return res;
		},
		// 保持在诊断页面停留，5s一次，其他人该设备不能进入诊断页面
		async keepMedicalPage(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.post("/keepMedicalPage?equipNo="+info.equipNo+"&flowNo="+info.flowNo);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			
			return res;
		},
		// 结束在诊断页面停留
		async exitMedicalPage(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.post("/exitMedicalPage?equipNo="+info.equipNo+"&flowNo="+info.flowNo);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			
			return res;
		},
		// 开始数据流诊断 deviceType:ECU,DCU
		async startDiagnoseFlowData(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.post("/startDiagnoseFlowData",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			
			return res;
		},
		// 停止数据流诊断
		async stopDiagnoseFlowData(info, alerted = true) {
			const [err, res] = await this.equipDiagnoseAPI.post("/stopDiagnoseFlowData?equipNo="+info.equipNo+"&deviceType="+info.deviceType);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			
			return res;
		},
    // 判断是否具备读历史故障码功能
    async hasHistoryFunction(info, alerted = true) {
    	const [err, res] = await this.equipDiagnoseAPI.get("/hasHistoryFunction",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	
    	return res;
    },
    // 获取更多版本信息 deviceType:ECU,DCU
    async getMoreVersionInfo(info, alerted = true) {
    	const [err, res] = await this.equipDiagnoseAPI.get("/getMoreVersionInfo",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	
    	return res;
    },
    // 刷新更多版本信息
    async refreshVersionInfo(info, alerted = true) {
    	const [err, res] = await this.equipDiagnoseAPI.get("/refreshVersionInfo",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	
    	return res;
    }
	}
}
