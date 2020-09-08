// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import Swiper from 'swiper'
// import '../node_modules/swiper/css/swiper.min.css'
// import '../node_modules/swiper/js/swiper'
import jquery from "jquery"
import "bootstrap"

import "./assets/js/flexible"
import "./assets/css/reset.css"

import STORE from '@/store/store'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store(STORE)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
