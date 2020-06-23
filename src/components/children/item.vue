<template>
    <div class="svg">
        <!-- <h1>文章列表</h1> -->
        <router-link :to='"/article/" + info.id' tag='div'>
        <!-- <img v-lazy="data.imgUrl" alt="" class="img"> -->
        <p>{{info.tit}}</p>
        <p>{{info.article}}</p>
        <span @click.prevent="add">like</span><span>{{info.likecount}}</span>
        </router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    props:["info"],
    data(){
        return {
            list:[],
        }
    },
    methods:{
        add(){
            if(!this.$store.state.loginstate){
                this.$router.replace({
                    path : "/login"
                })
            }else{
            this.$store.commit("addlike", this.info.id)

            }
            // console.log(this.$route)
        }
    }
    
}
</script>

<style lang="" scoped>
.img{
    /* background-color: white; */
    width: 100%;
    padding: 5px;
}
p{
    margin: 0;
    padding: 0;
}

</style>