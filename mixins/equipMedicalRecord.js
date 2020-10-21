// equipMedicalRecord mixin 必须得同时和 page mixin 同时使用

import equipMedicalRecordAPI from '@/api/equipMedicalRecord.js';

export default {
	data() {
		return {
			equipMedicalRecordAPI: new equipMedicalRecordAPI(),
		}
	},
	methods: {
		// 开始保存数据, 返回saveId
		async startSaveData(info, alerted = true) {
			const [err, res] = await this.equipMedicalRecordAPI.post("/startSaveData",info);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 结束保存数据
		async endSaveData(saveId, alerted = true) {
			const [err, res] = await this.equipMedicalRecordAPI.post("/endSaveData?saveId="+saveId);
			
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
    // 后台诊断保存
    async backSave(info, alerted = true) {
    	const [err, res] = await this.equipMedicalRecordAPI.post("/backSave",info);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 结束后台诊断
    async stopBackSave(equipNo, alerted = true) {
    	const [err, res] = await this.equipMedicalRecordAPI.post("/stopBackSave?equipNo="+equipNo);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 获取后台保存任务 null没有后台保存任务
    async getBackSave(equipNo, alerted = true) {
    	const [err, res] = await this.equipMedicalRecordAPI.post("/getBackSave?equipNo="+equipNo);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    },
    // 修改数据流备注
    async updateDesc(saveId, desc, alerted = true) {
    	const [err, res] = await this.equipMedicalRecordAPI.post("/updateDesc?saveId="+saveId+"&desc="+desc);
    	
    	if (err && alerted == true) {
    		this._error(err);
    		return null;
    	}
    	return res;
    }
	}
}
