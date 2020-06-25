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
      <div v-for="item in comments" :key="item.name" class="m-comm">
        <span class="m-comm-name">{{item.user}}:</span>
        <span class="m-comm-article">{{item.comm}}</span>
      </div>
    </div>

    <div class="comment-input">
      <input type="text" v-model="pinglun.comm" />
      <button @click="comment">评论</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id),
      list: {},
      comments: [],
      pinglun: {
        user: "",
        comm: ""
      }
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
      if (id) {
        let user = this.$store.state.user.find(item => item.id === id);

        this.pinglun.user = user.name;
        this.comments.push(this.pinglun);
      } else {
        this.$router.replace({
          path: "/login"
        });
      }
    }
  },
  watch: {
    comments(val) {
      this.comments = val;
    }
  }
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
.comment-input {
  position: fixed;
  bottom: 0;
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
</style>