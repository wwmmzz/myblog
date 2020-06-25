<template>
  <div>
    <div class="row header">
      <div class="col-xs-6 col-md-6">
        <router-link to="/home" tag="div"><span :class="{select: path == '/home'}">首页</span></router-link>
      </div>
      <div class="col-xs-6 col-md-6 right">
        <router-link to="/user" tag="span" v-if="state"><span :class="{select: path == '/user'}">我的</span>
        </router-link>
        <router-link to="/login" tag="span" v-if="!state"><span :class="{select: path == '/login'}">登录</span>
        </router-link>
      </div>
    </div>
    <!-- <router-view></router-view> -->
    <!-- router-view的位置和home会不会覆盖header有关 -->
  </div>
</template>

<script>
export default {
//   data(){
//       return{
//           path : this.$route.path
//       }
//   },
  methods: {
    islogin() {
      if (this.$store.state.loginstate) {
        return true;
      } else {
        return false;
      }
    }
  },
  computed: {
    state() {
      return this.$store.state.loginstate;
    //   console.log(this.state);
    },
    path(){
          return this.$route.path
        //   deep :true
      }
  },
  mounted() {
    console.log(this.$store.state.loginstate);
    console.log(this.$route)
  }
};
</script>

<style lang="" scoped>
/* @import 'bootstrap'; */
.header {
  margin: 0 15px;
  /* width: 100%; */
  /* position: fixed; */
  background-color: white;
  font-size: 30px;
  /* z-index: 10; */
}
.right {
  text-align: right;
}
.select{
    border-bottom: 2px;
    border-bottom-color: red;
    border-bottom-style: solid;
}
</style>