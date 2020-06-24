<template>
  <div id="user">
    <h1>用户</h1>
    <span>标题</span>
    <input type="text" v-model="arti.tit"/>
    <textarea name id cols="30" rows="10" v-model="arti.msg"></textarea>
    <button @click="fabu">发布</button>
    <div v-html="note"></div>
    <p>我喜欢的</p>
    <p v-for="item in list" :key="item.id">{{item.tit}}</p>
  </div>
</template>

<script>
import marked from "marked";

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
      return marked(this.arti.msg);
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
      fabu(){
          this.$store.commit("fabu", this.arti)
      }
  }
};
</script>

<style lang="" scoped>
</style>