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
import marked from 'marked'

Vue.use(Vuex)
Vue.use(lazyload)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
    list: JSON.parse(localStorage.getItem("msg")) || [],
    // {
    //   id: 0,
    //   author: 0,
    //   likecount: 0,
    //   date: '0',
    //   tit: "标题0",
    //   article: "内容0"
    // },
    // {
    //   id: 1,
    //   author: 1,
    //   likecount: 0,
    //   date: '1',
    //   tit: "标题1",
    //   article: "内容1"
    // },
    // {
    //   id: 2,
    //   author: 0,
    //   likecount: 0,
    //   date: '2',
    //   tit: "标题2",
    //   article: "内容2"
    // },

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
      let user = state.user.find(item => item.id === state.loginstate)
      let index = 0;
      let inmylist = user.likelist.find((item, ind) => {
        if (item.id === id) {
          index = ind
          return true
        }
      })

      console.log("inmylist", inmylist);
      // console.log(index)
      if (!inmylist) {
        add.likecount += 1;
        user.likelist.push(add);
        state.likelist = user.likelist
        localStorage.setItem("msg", JSON.stringify(state.list));

        // console.log(add)
      } else {
        // let index = user.likelist.indexOf(add)
        add.likecount -= 1;
        user.likelist.splice(index, 1)
        localStorage.setItem("msg", JSON.stringify(state.list));

      }
    },

    login(state, user) {
      let myuser = state.user.find(item => item.name == user.name);
      let mypass = state.user.find(item => item.password == user.password);
      if (myuser && mypass) {
        myuser.loginstate = true
        state.loginstate = myuser.id
        localStorage.setItem("user", JSON.stringify(myuser));

      }
    },
    regist(state, newUser) {
      let myuser = state.user.find(item => item.name == newUser.name);

      if (!myuser) {
        const user = {
          id: state.user.length,
          name: newUser.name,
          password: newUser.password,
          loginstate: false,
          myarticle: [],
          likelist: []
        };
        state.user.push(user);
        console.log("注册成功")
      } else {
        console.log("用户名已存在")
      }
    },
    fabu(state, arti) {
      const time = Date.now();
      const last = state.list;
      // console.log(last.length-1)
      const msg = {
        id: last.length,
        author: state.loginstate,
        likecount: 0,
        comments: [],
        date: time,
        tit: arti.tit,
        article: arti.msg
      };
      last.push(msg);
      console.log('saved', new Date())
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
