<template>
  <div class="item">
    <!-- <h1>文章列表</h1> -->
    <router-link :to="'/article/' + info.id" tag="div">
      <!-- <img v-lazy="data.imgUrl" alt="" class="img"> -->
      <h4>{{info.tit}}</h4>
      <p class="article">{{info.article}}</p>
    </router-link>
    <div class="f-center box-center">
      <div class="box-center">
        <span class="glyphicon glyphicon-share-alt"></span>
      </div>
      <div class="box-center">
        <span class="glyphicon glyphicon-comment" ></span>
      </div>
      <div class="box-center">
        <span @click.prevent="add" class="glyphicon glyphicon-heart"  aria-hidden="true"></span>
        <span class="likecount">{{info.likecount}}</span>
      </div>
      <!-- <div>
  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true">123456</span>
  Enter a valid email address
</div> -->
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      list: []
    };
  },
  methods: {
    add() {
      if (!this.$store.state.loginstate) {
        this.$router.replace({
          path: "/login"
        });
      } else {
        this.$store.commit("addlike", this.info.id);
      }
      // console.log(this.$route)
    }
  }
};
</script>

<style lang="" scoped>
.img {
  /* background-color: white; */
  width: 100%;
  padding: 5px;
}
p {
  margin: 0;
  padding: 0;
}
.item {
  /* background-image: url("../../assets/001.jpg"); */

  /* padding: 0 10px; */
  background-color: white;
  /* border-radius: 10px; */
  margin: 10px 0;
}
.f-center {
  border-top-width: 0.5px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  border-color: #e6e6e6;
  border-style: solid;
}

.box-center {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.glyphicon{
    position:static;
}
.likecount{
    margin-left: 3px;
}

@media screen and (min-width : 900px){
    .item{
        float: left;
        width: 30%;
        margin: 1.5%;
    }
    .article{
        height: 4em;
        overflow: hidden;

    }    
}
</style>