// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Swiper from 'swiper'
import '../node_modules/swiper/css/swiper.min.css'
import '../node_modules/swiper/js/swiper'
import $ from "jquery"
import "bootstrap"

import "./assets/js/flexible"
import "./assets/css/reset.css"

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
    list: JSON.parse(localStorage.getItem("msg")) || [
      {
        article: "Character cannot be developed in ease and quiet. Only through\
                experience of trial and suffering can the soul be strengthened, ambition\
                inspired, and success achieved.",
        author: 1,
        date: 1593027507441,
        id: 0,
        likecount: 3,
        tit: "英语美文",
        comments:[]
      },
      {
        article: "如果我爱你，而你也正巧爱我。你头发乱了时候，我会笑笑地替\
        你拨一拨，然后，手还留恋地在你发上多待几秒。但是，如果我爱你，而你不\
        巧地不爱我。你头发乱了，我只会轻轻地告诉你，你头发乱了喔。这大概是最\
        纯粹的爱情观，如若相爱，便携手到老；如若错过，便护他安好",
        author: 1,
        date: 1593027750315,
        id: 1,
        likecount: 1,
        tit: "村上春树",
        comments:[]

      },
      {
        article: "生命中有很多东西，能忘掉的叫过去，忘不掉的叫记忆。一个人的寂\
        寞，有时候，很难隐藏得太久，时间太久了，人就会变得沉默，那时候，有些往日\
        的情怀，就找不回来了。或许，当一段不知疲倦的旅途结束，只有站在终点的人，才\
        会感觉到累。其实我一直都明白，能一直和一人做伴，实属不易",
      author: 1,
      date: 1593027774987,
      id: 2,
      likecount: 2,
      tit: "海子",
      comments:[]

      }
      
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
    loginstate: null,
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
      }else{
        alert("用户名或密码错误")
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
    },
    comment(state, comm){
      let newcomm = {}
      let article = state.list.find(item=>item.id == comm.id)
      console.log(article)
      newcomm = JSON.parse(JSON.stringify(comm))
      article.comments.push(newcomm.pinglun)
    }
  },
  actions:{

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
