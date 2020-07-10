<template>
  <div id="article">
    <h3>{{list.tit}}</h3>
    <h5>{{list.article}}</h5>
    <div class="f-center box-center">
      <div class="box-center">
        <span>转发</span>
      </div>
      <div class="box-center">
        <span>评论</span>
      </div>
      <div class="box-center">
        <span @click.prevent="add">点赞</span>
        <span>{{list.likecount}}</span>
      </div>
    </div>
    <h3>评论区</h3>
    <div class="comm-box">
      <div v-for="item in list.comments" :key="item.date" class="m-comm">
        <span class="m-comm-name">{{item.user}}:</span>
        <span class="m-comm-article">{{item.comm}}</span>
      </div>
    </div>

    <div class="comment-i">
      <input type="text" v-model="comm.pinglun.comm" class="comment-input"/>
      <button class="btn btn-info" @click="comment" :class="{fobiden : !comm.pinglun.comm}">评论</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id),
      list: {},
      comm: {
        id:parseInt(this.$route.params.id),
        pinglun: {
        user: "",
        comm: "",
        date: 0
      }
      },

      
    };
  },
  mounted() {
    let id = this.id;
    console.log(id);
    let myarticle = this.$store.state.list.find(item => item.id === id);
    console.log(myarticle);
    this.list = myarticle;
    console.log(this.list);
  },
  methods: {
    add() {
      this.$store.commit("addlike", this.id);
      console.log(this.$route.params);
    },
    comment() {
      let id = this.$store.state.loginstate;
      let time = Date.now()
      if (id) {
        let user = this.$store.state.user.find(item => item.id === id);

        this.comm.pinglun.user = user.name;
        this.comm.pinglun.date = time
        this.$store.commit("comment", this.comm)
        this.comm.pinglun.comm = ""
      } else {
        this.$router.replace({
          path: "/login"
        });
      }
    }
  },
  watch:{
    "comm.pinglun.comm":{
      handler:function(a){
     this.comm.pinglun.comm = a.slice(0, 20)
      // console.log(this.comm.pinglun.comm)
    },
    }
  }
  // computed: {
  //   comments() {
  //     return this.list.comments
  //   }
  // }
};
</script>

<style lang="" scoped>
#article {
  margin: 10px 15px;
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
.comment-i {
  display: flex;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  border-top: #c2c2c2 solid 1px;
}
.comment-input{
    padding: 0 10px;
    flex: 1;
    border: #c2c2c2 solid 1px;
    border-radius: 8px;
    margin: 0 10px;
}
.comment-btn{
    width: 4em;
    text-align: center;
    line-height: 30px;
    /* color: green; */
}
.m-comm {
  padding: 5px 0;
  border-top-width: 0.5px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  border-color: #e6e6e6;
  border-style: solid;
}
.m-comm-name {
  margin-right: 20px;
}
.comm-box {
  margin-top: 20px;
}
.fobiden{
  pointer-events: none;
  opacity: 0.5;
}
</style>