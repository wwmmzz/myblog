<template>
  <div>
    <div class="header">
      <div class="left">
        <router-link to="/home" tag="div">
        <!-- <span class="glyphicon glyphicon-home"></span> -->
          <span :class="{select: path == '/home'}" class="glyphicon glyphicon-home"></span>
        </router-link>
      </div>
      <div class="headcenter"></div>
      <div class="right">
        <router-link to="/user" tag="span" v-if="state">
        <!-- <span class="glyphicon glyphicon-user"></span> -->
          <span :class="{select: path == '/user'}" class="glyphicon glyphicon-user"></span>
        </router-link>
        <router-link to="/login" tag="span" v-if="!state">
          <span :class="{select: path == '/login'}" class="glyphicon glyphicon-log-in"></span>
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
    path() {
      return this.$route.path;
      //   deep :true
    }
  },
  mounted() {
    console.log(this.$store.state.loginstate);
    console.log(this.$route);
  }
};
</script>

<style lang="" scoped>
@import 'bootstrap';

.header {
  /* margin: 5px 15px; */
  /* width: 100%; */
  /* position: fixed; */
  /* position: fixed; */
  display: flex;
  /* width: 1000px; */
  background-color: white;
  font-size: 30px;
  padding: 0 10px;
  box-sizing: border-box;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.01);

  /* z-index: 10; */
}
.headcenter{
  flex: 1;
}
.select {
  /* border-bottom: 2px;
  border-bottom-color: red;
  border-bottom-style: solid; */
  color: #4caf50;
}
</style>