<template>
  <div class="home">
    <!-- <h1>首页</h1> -->
    <ad class="ad"></ad>

    <!-- <div class="col-md-2">
      <msvg class="msvg"></msvg>
    </div>-->
    <div class="article">
      <div>
        <span @click="handhot" :class="{on: sortlist == 'hot'}">最热</span>
        <span @click="handnew" :class="{on: sortlist == 'new'}">最新</span>
      </div>

      <item v-for="item in list" :key="item.id" :info="item"></item>
    </div>
    <!-- <div class="col-xs-3 col-md-5 ad">
      
    </div>-->
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
      list: [],
      state: this.$store.state,
      sort: ""
    };
  },
  created() {
    // this.$store.state.list = localStorage.getItem("msg")
    this.list = this.$store.state.list;
    // console.log(this.list[0])
  },
  watch: {
    state() {
      console.log("changed");
      deep: true;
    }
  },
  // computed:{
  //   list(){
  //     return this.$store.state.list
  //     console.log("changed")
  //   }
  // },
  components: {
    msvg,
    item,
    ad
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
  computed: {
    sortlist() {
      return this.sort;
    }
  },
  methods: {
    handhot() {
      this.list.sort((a, b) => b.likecount - a.likecount);
      this.sort = "hot";
    },
    handnew() {
      this.list.sort((a, b) => a.date - b.date);
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
@media screen and (max-width: 1000px) {
  .msvg {
    display: none;
  }
}

@media screen and (min-width: 900px) {
  .home {
    display: flex;
    direction: rtl;
  }
  .ad {
    flex-grow: 1;
    /* float: right; */
    /* width: 30%; */
  }
  .article {
    direction: ltr;
    flex-grow: 3;
    /* width: 60%; */
  }
}
</style>