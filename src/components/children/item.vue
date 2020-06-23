<template>
    <div class="svg">
        <!-- <h1>文章列表</h1> -->
        <router-link :to='"/article/" + info.id' tag='div'>
        <!-- <img v-lazy="data.imgUrl" alt="" class="img"> -->
        <p>{{info.article}}</p>
        <p>{{info.tit}} <span @click.prevent="add">like</span> </p>
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
            this.$store.commit("addlike", this.info.id)
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