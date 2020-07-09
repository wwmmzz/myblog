<template>
  <div id="user">
    <div>
      <span>标题</span>
      <input type="text" v-model="arti.tit" />
      <button @click="logout">退出</button>
      <textarea name id cols="30" rows="10" v-model="arti.msg" class="m-input"></textarea>
      <div class="m-input-btn">
        <button @click="fabu">发布</button>
      </div>
      <div v-html="note"></div>
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
    note() {
      return this.arti.msg;
    }
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
  resize: none;
  width: 100%;
  height: 68px;
}
.article {
  margin-top: 20px;
}
.m-input-btn {
  margin: 0 10px;
  direction: rtl;
}
</style>