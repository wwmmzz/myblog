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
import VueLazyload from 'vue-lazyload'

Vue.use(Vuex)
Vue.use(lazyload)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    count : 0,
    list : [
      {
        id:1,
        tit: "标题1",
        article : "内容1"
      },
      {
        id:2,
        tit : "标题2",
        article : "内容2"
      },
      {
        id:3,
        tit: "标题3",
        article : "内容3"
      },
    ],
    likelist : []
  },
  mutations : {
    addlike(state, id){
      state.count += 1;
      let add = state.list.find(item=>item.id === id);
      console.log(add);
      if(add){
        state.likelist.push(add)
        console.log(state.likelist)
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
