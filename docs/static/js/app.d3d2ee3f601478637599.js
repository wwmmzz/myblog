webpackJsonp([1],{"+cZj":function(t,e){},"991W":function(t,e){},"H+ge":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),n=s.n(i),a=s("7+uW"),o={methods:{islogin:function(){return!!this.$store.state.loginstate}},computed:{state:function(){return this.$store.state.loginstate},path:function(){return this.$route.path}},mounted:function(){console.log(this.$store.state.loginstate),console.log(this.$route)}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"left"},[s("router-link",{attrs:{to:"/home",tag:"div"}},[s("span",{staticClass:"glyphicon glyphicon-home",class:{select:"/home"==t.path}})])],1),t._v(" "),s("div",{staticClass:"headcenter"}),t._v(" "),s("div",{staticClass:"right"},[t.state?s("router-link",{attrs:{to:"/user",tag:"span"}},[s("span",{staticClass:"glyphicon glyphicon-user",class:{select:"/user"==t.path}})]):t._e(),t._v(" "),t.state?t._e():s("router-link",{attrs:{to:"/login",tag:"span"}},[s("span",{staticClass:"glyphicon glyphicon-log-in",class:{select:"/login"==t.path}})])],1)])])},staticRenderFns:[]};var c={components:{myHeader:s("VU/8")(o,r,!1,function(t){s("maFo")},"data-v-4bcf21a6",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("my-header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=s("VU/8")(c,l,!1,function(t){s("ZmMy")},null,null).exports,d=s("/ocq"),m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"svg"},[e("div",[this._v("s")]),this._v(" "),e("div",[this._v("v")]),this._v(" "),e("div",[this._v("g")])])}]};var v=s("VU/8")({},m,!1,function(t){s("kAD1")},"data-v-277569da",null).exports,p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/article/"+t.info.id,tag:"div"}},[s("h4",[t._v(t._s(t.info.tit))]),t._v(" "),s("p",{staticClass:"article"},[t._v(t._s(t.info.article))])]),t._v(" "),s("div",{staticClass:"f-center box-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"box-center"},[s("span",{staticClass:"glyphicon glyphicon-heart",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.preventDefault(),t.add(e)}}}),t._v(" "),s("span",{staticClass:"likecount"},[t._v(t._s(t.info.likecount))])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-center"},[e("span",{staticClass:"glyphicon glyphicon-share-alt"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-center"},[e("span",{staticClass:"glyphicon glyphicon-comment"})])}]};var h=s("VU/8")({props:["info"],data:function(){return{list:[]}},methods:{add:function(){this.$store.state.loginstate?this.$store.commit("addlike",this.info.id):this.$router.replace({path:"/login"})}}},p,!1,function(t){s("H+ge")},"data-v-16652f84",null).exports,f=s("j7an"),g={mounted:function(){new f.a(".swiper-container",{loop:!0,pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",scrollbar:".swiper-scrollbar",autoplay:{delay:2500,disableOnInteraction:!1}})}},_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ad"},[e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[this._v("Slide 1")]),this._v(" "),e("div",{staticClass:"swiper-slide"},[this._v("Slide 2")]),this._v(" "),e("div",{staticClass:"swiper-slide"},[this._v("Slide 3")]),this._v(" "),e("div",{staticClass:"swiper-slide"},[this._v("Slide 4")])])])])}]};var C={data:function(){return{list:[],sort:""}},created:function(){this.list=this.$store.state.list},components:{msvg:v,item:h,ad:s("VU/8")(g,_,!1,function(t){s("Whaz")},"data-v-53246da8",null).exports},computed:{sortlist:function(){return this.sort}},methods:{handhot:function(){this.list.sort(function(t,e){return e.likecount-t.likecount}),this.sort="hot"},handnew:function(){this.list.sort(function(t,e){return e.date-t.date}),this.sort="new"}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"article"},[s("div",{staticClass:"filter"},[s("span",{class:{on:"hot"==t.sortlist},on:{click:t.handhot}},[t._v("最热")]),t._v(" "),s("span",{class:{on:"new"==t.sortlist},on:{click:t.handnew}},[t._v("最新")])]),t._v(" "),t._l(t.list,function(t){return s("item",{key:t.id,attrs:{info:t}})})],2),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var $=s("VU/8")(C,w,!1,function(t){s("jr6z")},"data-v-cd069510",null).exports,b={data:function(){return{user:{name:"",password:""},account:!0}},methods:{login:function(){this.$store.commit("login",this.user),this.$store.state.loginstate&&this.$router.replace({path:"/home"})},regist:function(){this.$store.commit("regist",this.user)},acco:function(){this.account=!this.account,console.log(this.account)}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"login-page"},[s("div",{staticClass:"form"},[t.account?t._e():s("div",{staticClass:"register-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),s("button",{on:{click:t.regist}},[t._v("注册")]),t._v(" "),s("p",{staticClass:"message"},[t._v("\n          已有账号？\n          "),s("a",{attrs:{href:"#"},on:{click:t.acco}},[t._v("登录")])])]),t._v(" "),t.account?s("form",{staticClass:"login-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),s("button",{on:{click:t.login}},[t._v("登录")]),t._v(" "),s("p",{staticClass:"message"},[t._v("\n          没有账号?\n          "),s("a",{attrs:{href:"#"},on:{click:t.acco}},[t._v("注册")])])]):t._e()])])])},staticRenderFns:[]};var x=s("VU/8")(b,k,!1,function(t){s("Ybpy")},"data-v-03e06b96",null).exports,y={data:function(){return{id:parseInt(this.$route.params.id),list:{},comm:{id:parseInt(this.$route.params.id),pinglun:{user:"",comm:"",date:0}}}},mounted:function(){var t=this.id;console.log(t);var e=this.$store.state.list.find(function(e){return e.id===t});console.log(e),this.list=e,console.log(this.$route,"路由")},methods:{add:function(){this.$store.commit("addlike",this.id),console.log(this.$route.params)},comment:function(){var t=this.$store.state.loginstate,e=Date.now();if(t){var s=this.$store.state.user.find(function(e){return e.id===t});this.comm.pinglun.user=s.name,this.comm.pinglun.date=e,this.$store.commit("comment",this.comm),this.comm.pinglun.comm=""}else this.$router.replace({path:"/login"})}},watch:{"comm.pinglun.comm":{handler:function(t){this.comm.pinglun.comm=t.slice(0,20)}}}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"article"}},[s("h3",[t._v(t._s(t.list.tit))]),t._v(" "),s("h5",[t._v(t._s(t.list.article))]),t._v(" "),s("div",{staticClass:"f-center box-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"box-center"},[s("span",{on:{click:function(e){return e.preventDefault(),t.add(e)}}},[t._v("点赞")]),t._v(" "),s("span",[t._v(t._s(t.list.likecount))])])]),t._v(" "),s("h3",[t._v("评论区")]),t._v(" "),s("div",{staticClass:"comm-box"},t._l(t.list.comments,function(e){return s("div",{key:e.date,staticClass:"m-comm"},[s("span",{staticClass:"m-comm-name"},[t._v(t._s(e.user)+":")]),t._v(" "),s("span",{staticClass:"m-comm-article"},[t._v(t._s(e.comm))])])}),0),t._v(" "),s("div",{staticClass:"comment-i"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comm.pinglun.comm,expression:"comm.pinglun.comm"}],staticClass:"comment-input",attrs:{type:"text"},domProps:{value:t.comm.pinglun.comm},on:{input:function(e){e.target.composing||t.$set(t.comm.pinglun,"comm",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-info",class:{fobiden:!t.comm.pinglun.comm},on:{click:t.comment}},[t._v("评论")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-center"},[e("span",[this._v("转发")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-center"},[e("span",[this._v("评论")])])}]};var N=s("VU/8")(y,E,!1,function(t){s("nRqn")},"data-v-7c70f2c6",null).exports,S={data:function(){return{arti:{msg:"",tit:""},msgs:this.$store.state.list}},computed:{list:function(){return this.$store.state.likelist}},watch:{arti:{handler:function(t){t.msg=t.msg.slice(0,140),t.tit=t.tit.slice(0,10)},deep:!0},msgs:function(){localStorage.setItem("msg",n()(this.msgs))}},methods:{fabu:function(){this.$store.commit("fabu",this.arti)},logout:function(){this.$store.state.loginstate=null,this.$router.replace({path:"/home"})}},components:{item:h}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"user"}},[s("div",[s("div",{staticClass:"title-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.arti.tit,expression:"arti.tit"}],staticClass:"title",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.arti.tit},on:{input:function(e){e.target.composing||t.$set(t.arti,"tit",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.arti.tit.length))]),t._v("/"),s("span",[t._v("10")])]),t._v(" "),s("div",{staticClass:"article-box"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.arti.msg,expression:"arti.msg"}],staticClass:"m-input",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.arti.msg},on:{input:function(e){e.target.composing||t.$set(t.arti,"msg",e.target.value)}}}),t._v(" "),s("div",{staticClass:"article-count"},[s("span",[t._v(t._s(t.arti.msg.length))]),t._v("/"),s("span",[t._v("140")])])]),t._v(" "),s("div",{staticClass:"m-input-btn"},[s("button",{staticClass:"btn btn-success",class:{fobiden:!(t.arti.msg&&t.arti.tit)},on:{click:t.fabu}},[t._v("发布")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("退出")])]),t._v(" "),s("div",{staticClass:"article"},t._l(t.list,function(t){return s("item",{key:t.id,attrs:{info:t}})}),1)])])},staticRenderFns:[]};var F=s("VU/8")(S,R,!1,function(t){s("Ngag")},"data-v-4676e527",null).exports;a.a.use(d.a);var P=new d.a({routes:[{path:"/home",component:$},{path:"/login",component:x},{path:"/article/:id",component:N},{path:"/user",component:F},{path:"*",redirect:"/home"}]}),U=s("NYxO");s("+cZj"),s("2apK"),s("7t+N"),s("gNGx"),s("OCMt"),s("991W");a.a.use(U.a),a.a.config.productionTip=!1;var V=new U.a.Store({state:{count:0,list:JSON.parse(localStorage.getItem("msg"))||[{article:"Character cannot be developed in ease and quiet. Only through                experience of trial and suffering can the soul be strengthened, ambition                inspired, and success achieved.",author:1,date:1593027507441,id:0,likecount:3,tit:"英语美文",comments:[]},{article:"如果我爱你，而你也正巧爱我。你头发乱了时候，我会笑笑地替        你拨一拨，然后，手还留恋地在你发上多待几秒。但是，如果我爱你，而你不        巧地不爱我。你头发乱了，我只会轻轻地告诉你，你头发乱了喔。这大概是最        纯粹的爱情观，如若相爱，便携手到老；如若错过，便护他安好",author:1,date:1593027750315,id:1,likecount:1,tit:"村上春树",comments:[]},{article:"生命中有很多东西，能忘掉的叫过去，忘不掉的叫记忆。一个人的寂        寞，有时候，很难隐藏得太久，时间太久了，人就会变得沉默，那时候，有些往日        的情怀，就找不回来了。或许，当一段不知疲倦的旅途结束，只有站在终点的人，才        会感觉到累。其实我一直都明白，能一直和一人做伴，实属不易",author:1,date:1593027774987,id:2,likecount:2,tit:"海子",comments:[]}],likelist:[],user:[{id:1,name:"123",password:"123",loginstate:!1,myarticle:[],likelist:[]},{id:2,name:"456",password:"456",loginstate:!1,myarticle:[],likelist:[]}],loginstate:null},mutations:{addlike:function(t,e){var s=t.list.find(function(t){return t.id===e}),i=t.user.find(function(e){return e.id===t.loginstate}),a=0,o=i.likelist.find(function(t,s){if(t.id===e)return a=s,!0});console.log("inmylist",o),o?(s.likecount-=1,i.likelist.splice(a,1),localStorage.setItem("msg",n()(t.list))):(s.likecount+=1,i.likelist.push(s),t.likelist=i.likelist,localStorage.setItem("msg",n()(t.list)))},login:function(t,e){var s=t.user.find(function(t){return t.name==e.name}),i=t.user.find(function(t){return t.password==e.password});s&&i?(s.loginstate=!0,t.loginstate=s.id,localStorage.setItem("user",n()(s))):alert("用户名或密码错误")},regist:function(t,e){if(t.user.find(function(t){return t.name==e.name}))console.log("用户名已存在");else{var s={id:t.user.length,name:e.name,password:e.password,loginstate:!1,myarticle:[],likelist:[]};t.user.push(s),console.log("注册成功")}},fabu:function(t,e){var s=Date.now(),i=t.list,n={id:i.length,author:t.loginstate,likecount:0,comments:[],date:s,tit:e.tit,article:e.msg};i.push(n),console.log("saved",new Date)},comment:function(t,e){var s,i=t.list.find(function(t){return t.id==e.id});console.log(i),s=JSON.parse(n()(e)),i.comments.push(s.pinglun)}},actions:{}});new a.a({el:"#app",router:P,store:V,components:{App:u},template:"<App/>"})},Ngag:function(t,e){},OCMt:function(t,e){!function(t,e){var s=e.documentElement,i=t.devicePixelRatio||1;function n(){var t=s.clientWidth/10;s.style.fontSize=t+"px"}if(n(),t.addEventListener("resize",n),t.addEventListener("pageshow",function(t){t.persisted&&n()}),i>=2){var a=e.createElement("body"),o=e.createElement("div");o.style.border=".5px solid transparent",a.appendChild(o),s.appendChild(a),1===o.offsetHeight&&s.classList.add("hairlines"),s.removeChild(a)}}(window,document)},Whaz:function(t,e){},Ybpy:function(t,e){},ZmMy:function(t,e){},jr6z:function(t,e){},kAD1:function(t,e){},maFo:function(t,e){},nRqn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d3d2ee3f601478637599.js.map