<template>
  <div class="row home">
    <!-- <h1>首页</h1> -->
    <div class="col-md-2 ">
      <msvg class="msvg"></msvg>
    </div>
    <div class="col-xs-6 col-md-5">
      <item v-for="item in list" :key="item.id" :data="item"></item>
    </div>
    <div class="col-xs-5 col-md-5 ad">
      <ad></ad>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import msvg from "./children/svg";
import item from "./children/item";
import ad from "./children/ad";

export default {
  data() {
    return {
      list: []
    }
  },
  components: {
    msvg,
    item,
    ad
  },
  mounted() {
      let arr = [];
    function createOneHundredThousandData() {
      for (let i = 0; i < 50; i++) {
        arr.push({
          imgUrl: require ("../assets/01.jpg"),
          id: i
        });
      }
    //   console.log(this.list)
      return arr;
    }
    createOneHundredThousandData();
    this.list = arr;

    console.log(this.list)
      

  }
};
</script>

<style lang="" scoped>
/* @import 'bootstrap'; */
.home {
  position: relative;
  /* height: 1000px; */
}
.ad {
  position: sticky;
  top: 0;
}
.msvg{
    position: fixed;
    top: 50px;
}
@media  screen and (max-width: 1000px) {
    .msvg{
        display: none;
    }


    
}
</style>