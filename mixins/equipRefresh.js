// equipRefresh mixin 必须得同时和 page mixin 同时使用

import equipRefreshAPI from '@/api/equipRefresh.js';

export default {
	data() {
		return {
			equipRefreshAPI: new equipRefreshAPI(),
		}
	},
	methods: {
		// 是否支持程序刷写
		async canRefresh(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/canRefresh", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取默认名称
		async getDefaultName(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/getDefaultName", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取指定版本程序刷写文件列表
		async getRefreshFileList(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/getRefreshFileList", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 获取刷写文件任务的状态
		async getRefreshStatus(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/getRefreshStatus", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 刷写程序文件开始-返回任务流水号
		async startRefresh(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.post("/startRefresh", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 查询是否有设备在刷写
		async getNowRefreshTask(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/getNowRefreshTask", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		// 刷写记录
		async refreshLog(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/refreshLog", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		//外部导入链接
		async getUploadUrl(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/getUploadUrl", info);

			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		//删除资源文件
		async deleteRefreshFile(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/deleteRefreshFile", info);
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		},
		//编辑资源文件名字
		async updateRefreshFile(info, alerted = true) {
			const [err, res] = await this.equipRefreshAPI.get("/updateRefreshFile", info);
		
			if (err && alerted == true) {
				this._error(err);
				return null;
			}
			return res;
		}
	}
}
