<template>
  <div id="user">
      <div>

      
    <span>标题</span>
    <input type="text" v-model="arti.tit"/>
    <textarea name id cols="30" rows="10" v-model="arti.msg" class="m-input"></textarea>
    <div class="m-input-btn">
    <button @click="fabu">发布</button>
    </div>
    <div v-html="note"></div>
    <!-- <p>我喜欢的</p> -->
    <div class="article">
    <!-- <p v-for="item in list" :key="item.id">{{item.tit}}</p> -->
      <item v-for="item in list" :key="item.id" :info="item"></item>
    </div>
      </div>
  </div>
</template>

<script>
import marked from "marked";
import item  from './children/item'

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
  },
  components : {
      item
  }
};
</script>

<style scoped>
#user{
    background-color: #f4f5f5;
}
.m-input{
    margin: 5px 0;
    resize: none;
    width: 100%;
    height: 68px;
}
.article{
    margin-top: 20px;
}
.m-input-btn{
    margin: 0 10px;
    direction: rtl;
}
</style>