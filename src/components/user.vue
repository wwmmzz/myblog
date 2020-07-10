<template>
  <div id="user">
    <div>
      <div class="title-box">
      <input type="text" class="title" placeholder="标题" v-model="arti.tit" />
      </div>
      <textarea name id cols="30" rows="10" v-model="arti.msg" class="m-input"></textarea>
      <div class="m-input-btn">
        <button @click="fabu" class="btn btn-success">发布</button>
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

      msgs: this.$store.state.list
    };
  },
  computed: {
    list() {
      return this.$store.state.likelist;
    },
    // note() {
    //   return this.arti.msg;
    // }
  },
  watch: {
    msg(a, b) {
      console.log("new:", a, "old:", b);
      //   localStorage.setItem("msg", a);
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
  height: .91rem /* 68/75 */;
}

.article {
  margin-top: .27rem /* 20/75 */;
}

.m-input-btn {
  margin: 0 auto;
  width: 90%;
  text-align-last: justify;
}

/* .title-box{
  background: white;
  width: 100%;
  box-sizing: border-box;
  margin : 10px;
  
} */

.title{
  width: 100%;
  margin: 16px 0;
  padding: 3px 10px;
  border-radius: 8px;
  border: #c2c2c2 solid 1px;
  box-sizing: border-box;
}
</style>