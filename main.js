import Vue from 'vue'
import App from './App'
import store from "./store"
// import webview from '@/common/uni-webview/uni.webview.js'
// import faIcon from '@/components/fa-icon/fa-icon.vue'
// import moment from 'moment'
// import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
// import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
// import MescrollEmpty from '@/components/mescroll-uni/components/mescroll-empty.vue';
// import showNotification from "@/components/my/notification/index.js"
// import mtils from 'mtils'
// import _ from 'lodash'

// 引入webview调uniapi插件
// Vue.prototype.$uni = webview.webView
Vue.prototype.$store = store
// 引入全局消息通知插件
// Vue.prototype.$notice = showNotification
// 引入时间处理插件
// Vue.prototype.$moment = moment
// 引入工具函数
// Vue.prototype.$mtils = mtils
// 引入js实用工具库
// Vue.prototype._ = _

Vue.config.productionTip = false

// 全局引入图标组件
// Vue.component('faIcon',faIcon)
/* 使用示例：<fa-icon type="glass" color="#000000" size="20"></fa-icon> */

// 引入滚动组件
// Vue.component('mescroll-body', MescrollBody)
// Vue.component('mescroll-uni', MescrollUni)
// Vue.component('mescroll-empty', MescrollEmpty)


App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
