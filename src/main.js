// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
import service from './service'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入font-awesome样式图标
import 'font-awesome/css/font-awesome.min.css'
// 引入echarts
import echarts from 'echarts'

Vue.use(ElementUI);
Vue.config.productionTip = false
// Vue.prototype.axios = axios       //挂载axios到原型上
Vue.prototype.service = service       //挂载axios到原型上
Vue.prototype.echarts = echarts       //挂载echarts到原型上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
