<template>
  <div id="user">
    <div>
      <div class="title-box">
      <input type="text" class="title" placeholder="标题" v-model="arti.tit" />
      <span>{{arti.tit.length}}</span>&#47;<span>10</span>
      </div>
      <div class="article-box">
      <textarea name id cols="30" rows="10" v-model="arti.msg" class="m-input"></textarea>
      <div class="article-count"><span>{{arti.msg.length}}</span>&#47;<span>140</span> </div>
      </div>
      <div class="m-input-btn">
        <button @click="fabu" class="btn btn-success" :class="{fobiden : !(arti.msg&&arti.tit)}">发布</button>
        <button @click="logout" class="btn btn-danger">退出</button>

        </div>
      <!-- <div v-html="note"></div> -->
      <h3>我喜欢的</h3>
      <div class="article">
        <!-- <p v-for="item in list" :key="item.id">{{item.tit}}</p> -->
        <item v-for="item in list" :key="item.id" :info="item"></item>
      </div>
    </div>
  </div>
</template>

<script>
import item from "./children/item";

export default {
  data() {
    return {
      arti: {
        msg: "",
        tit: ""
      },
      // a:this.arti.msg,
      msgs: this.$store.state.list
    };
  },
  computed: {
    list() {
      return this.$store.state.likelist;
    },
    // note() {
    //   // let article = ''
    //   // let newmsg = this.arti.msg
    //   // if(newmsg.length > 140){
    //   //    = newmsg.slice(0, 140)
    //   //   return this.arti.msg;

    //   // }
    //   return this.arti.msg.slice(0, 140)
    // }
  },
  watch: {
    // 'arti.msg'(a) {
    //      this.arti.msg = a.slice(0, 140)
    //         // console.log("new:", a)
    //   //   localStorage.setItem("msg", a);
    // },
    arti:{
      handler: function(a){
        a.msg = a.msg.slice(0, 140)
        a.tit = a.tit.slice(0, 10)
      },
      deep : true
    },
    msgs() {
      localStorage.setItem("msg", JSON.stringify(this.msgs));
      deep: true;
    }
  },
  methods: {
    fabu() {
      this.$store.commit("fabu", this.arti);
    },
    logout() {
      this.$store.state.loginstate = null;
      this.$router.replace({
        path: "/home"
      });
    }
  },
  components: {
    item
  }
};
</script>

<style scoped>
#user {
  background-color: #f4f5f5;
}

.m-input {
  margin: 5px 0;
  padding: 0 10px;
  resize: none;
  width: 100%;
  height: 6em /* 68/75 */;
}

.article {
  margin-top: .27rem /* 20/75 */;
}

.m-input-btn {
  margin: 0 auto;
  width: 90%;
  text-align-last: justify;
}

.title-box{
  background: white;
  margin: 16px 0;
  border: #c2c2c2 solid 1px;
  font-size: 12px;
  color:#c2c2c2;
}

.title{
  width: 90%;
  padding: 3px 10px;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
  color: black;
}

.article-box{
  position: relative;
  
}

.article-count{
  padding-right: 10px;
  box-sizing: border-box;
  width: 100%;
  text-align:end;
  font-size: 12px;
  color: #c2c2c2;
  position: absolute;
  bottom: 0;
  transform: translate(0, -100%);
}

.fobiden{
  pointer-events: none;
  opacity: 0.5;
}
</style>