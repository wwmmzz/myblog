// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import $ from 'jquery'
import 'bootstrap'
import axios from 'axios'
import Swiper from 'swiper'
import '../node_modules/swiper/css/swiper.min.css'
import '../node_modules/swiper/js/swiper'
import lazyload from 'vue-lazyload'

Vue.use(Vuex)
Vue.use(lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
