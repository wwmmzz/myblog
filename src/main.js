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
  state: {
    count: 0,
    list: [
      {
        id: 0,
        author: 0,
        likecount: 0,
        date: '0',
        tit: "标题0",
        article: "内容0"
      },
      {
        id: 1,
        author: 1,
        likecount: 0,
        date: '1',
        tit: "标题1",
        article: "内容1"
      },
      {
        id: 2,
        author: 0,
        likecount: 0,
        date: '2',
        tit: "标题2",
        article: "内容2"
      },
    ],
    likelist: [],
    user: [
      {
        id: 1,
        name: "123",
        password: "123",
        loginstate: false,
        myarticle: [],
        likelist: []
      },
      {
        id: 2,
        name: "456",
        password: "456",
        loginstate: false,
        myarticle: [],
        likelist: []
      }
    ],
    loginstate: null
  },
  mutations: {
    addlike(state, id) {
      
      let add = state.list.find(item => item.id === id);
      let user = state.user.find(item=>item.id === state.loginstate)
      console.log(add);
      if (add) {
        add.likecount += 1;
        user.likelist.push(add)
        state.likelist = user.likelist
        console.log(add)
      }
    },

    login(state, user) {
      let myuser = state.user.find(item => item.name == user.name);
      let mypass = state.user.find(item => item.password == user.password);
      if (myuser && mypass) {
        myuser.loginstate = true
        state.loginstate = myuser.id
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
