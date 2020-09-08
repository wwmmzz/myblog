<template>
  <div class="home">
    <!-- <h1>首页</h1> -->
    <!-- <ad class="ad"></ad> -->

    <!-- <div class="col-md-2">
      <msvg class="msvg"></msvg>
    </div>-->
    <div class="article">
      <div class="filter">
        <span @click="handhot" :class="{on: sort == 'hot'}">最热</span>
        <span @click="handnew" :class="{on: sort == 'new'}">最新</span>
      </div>

      <item v-for="item in list" :key="item.id" :info="item"></item>
    </div>
    <!-- <div class="col-xs-3 col-md-5 ad">
      
    </div>-->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import item from "./children/item";

export default {
  data() {
    return {
      list: this.$store.state.list,
      sort: ""
    };
  },
  created() {
    // this.$store.state.list = localStorage.getItem("msg")
    // this.list = this.$store.state.list;
    // console.log(this.list[0])
  },
  // computed:{
  //   list(){
  //     return this.$store.state.list
  //     console.log("changed")
  //   }
  // },
  components: {
    item
  },
  // mounted() {
  //   // let arr = [];
  //   // function createOneHundredThousandData() {
  //   //   for (let i = 0; i < 50; i++) {
  //   //     arr.push({
  //   //       imgUrl: require("../assets/01.jpg"),
  //   //       id: i
  //   //     });
  //   //   }
  //   //   //   console.log(this.list)
  //   //   return arr;
  //   // }
  //   // createOneHundredThousandData();
  //   // this.list = arr;

  //   // console.log(this.list);
  //   console.log(localStorage.getItem("msg"))

  // },
  // computed: {
  //   sortlist() {
  //     return this.sort;
  //   }
  // },
  methods: {
    handhot() {
      this.list.sort((a, b) => b.likecount - a.likecount);
      this.sort = "hot";
    },
    handnew() {
      this.list.sort((a, b) => b.date - a.date);
      this.sort = "new";
    }
  }
};
</script>

<style lang="" scoped>
/* @import 'bootstrap'; */
.home {
  padding: 0 15px;
  background-color: #f4f5f5;
  position: relative;
  /* height: 1000px; */
}
.ad {
  position: sticky;
  top: 0;
}
.msvg {
  /* background-color: #f4f5f5; */
  position: fixed;
  top: 200px;
}
.msvg div {
  widows: 1em;
  font-size: 1em;
  /* border-radius: 1em/1em; */
}
.item {
  background-color: white;
  /* border-radius: 8px/8px; */
  /* border-bottom: khaki; */
  margin: 2px 0;
}
.on {
  border-bottom: 2px;
  border-bottom-color: red;
  border-bottom-style: solid;
}
.filter span{
  display: inline-block;
  /* width: 100%; */
  background: white;
  font-size: 16px;
  margin: 10px 0;
  padding: 0 /* 10/100 */.1rem /* 10/100 */;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.01);


}
@media screen and (max-width: 1000px) {
  .msvg {
    display: none;
  }
}

@media screen and (min-width: 1000px) {
  .home {
    width: 1000px;
  }
  /* .ad {
    flex-grow: 1;
  }
  .article {
    direction: ltr;
    flex-grow: 3;
  } */
}
</style>