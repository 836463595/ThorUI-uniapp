import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 环境参数 => 令牌，作用于网络请求
		authorization: "",
		// 环境参数 => 终端guid，作用于网络请求
		cid: "",
		// 环境参数 => h5的调用方，app1（车管家）、wechat（微信浏览器）、none（无调用方，直接访问），作用于界面布局
		caller: "none",
		// 业务参数 => 设备序列号
		equipNo: "",
		// 业务参数 => 车牌号码
		truckNo: "",
    // 业务参数 => 调用页面源
    pageType: "",
		// 业务参数 => 发动机诊断数据流已选列表，id
		engineSelectedList: [],
		// 业务参数 => 后处理诊断数据流已选列表，id
		aftercureSelectedList: [],
		// 业务参数 => 开关诊断数据流列表，id
		switchSelectedList: [],
    // 业务参数 => 是否有后台保存任务
    hasBackTask: false
	},
	getters: {
		
	},
	mutations: {
		setCoreParameters(state,payload) {
			// 设置令牌
			state.authorization = payload.authorization ? payload.authorization : "";
			// 设置终端guid
			state.cid = payload.cid ? payload.cid : "";
			// 设置h5的调用方
			state.caller = payload.caller ? payload.caller : "none";
			// 设置设备序列号
			state.equipNo = payload.equipNo ? payload.equipNo : "";
			// 设置车牌号码
			state.truckNo = payload.truckNo ? payload.truckNo : "";
      // 设置调用页面源
      state.pageType = payload.pageType ? payload.pageType : "";
		},
		updateEngineSelectedList(state,arr) {
			state.engineSelectedList = arr;
		},
		updateAftercureSelectedList(state,arr) {
			state.aftercureSelectedList = arr;
		},
		updateSwitchSelectedList(state,arr) {
			state.switchSelectedList = arr;
		},
		cleanAllSelectedList(state) {
			state.engineSelectedList = [];
			state.aftercureSelectedList = [];
			state.switchSelectedList = [];
		},
    updateHasBackTask(state,status) {
      state.hasBackTask = status;
    }
	},
	actions: {
		
	},
})
