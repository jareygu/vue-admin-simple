import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css'

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss'

import App from './App.vue'
import store from './store'
import router from './routes'

import './icons'
import './permission'

import { initGlobalFunction } from './utils/globalFunction'

// 注册全局方法
initGlobalFunction()

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
