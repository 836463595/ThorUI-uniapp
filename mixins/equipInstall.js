// equipInstall mixin 必须得同时和 page mixin 同时使用

import equipInstallAPI from '@/api/equipInstall.js';

export default {
	data() {
		return {
			equipInstallAPI: new equipInstallAPI(),
		}
	},
	methods: {
		// 开始dcu安装,开始成功返回安装流水号
		async startDcuInstall(equipNo, alerted = true) {
			const [err, res] = await this.equipInstallAPI.post("/startDcuInstall?equipNo="+equipNo);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// dcu安装状态
		async dcuInstallStatus(equipNo, flowNo, alerted = true) {
			const [err, res] = await this.equipInstallAPI.post("/dcuInstallStatus?equipNo="+equipNo+"&flowNo="+flowNo);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 获取ECU安装流水列表
    async getInstallFlowNoList(info, alerted = true) {
    	const [err, res] = await this.equipInstallAPI.get("/getInstallFlowNoList",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 获取DCU安装流水列表
    async getDcuInstallFlowNoList(info, alerted = true) {
    	const [err, res] = await this.equipInstallAPI.get("/getDcuInstallFlowNoList",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 安装信息 使用流水号查询运维
    async getInstallRecordDetail(info, alerted = true) {
    	const [err, res] = await this.equipInstallAPI.get("/getInstallRecordDetail",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    }
	}
}
