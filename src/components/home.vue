<template>
  <div class="row home">
    <!-- <h1>首页</h1> -->
    <div class="col-md-2 ">
      <msvg class="msvg"></msvg>
    </div>
    <div class="col-xs-6 col-md-5">
      <item v-for="item in list" :key="item.id" :data="item" class="item"></item>
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
    /* background-color: #f4f5f5; 添加此样式会覆盖header，好像home在header的上面*/
  position: relative;
  /* height: 1000px; */
}
.ad {
  position: sticky;
  top: 0;
}
.msvg{
    background-color: #f4f5f5;
    position: fixed;
    top: 50px;
}
.item{
    background-color: #f4f5f5;
    border-radius: 8px/8px;
    /* border-bottom: khaki; */
    margin: 5px 0;
}
@media  screen and (max-width: 1000px) {
    .msvg{
        display: none;
    }


    
}
</style>