<template>
    <div class="svg">
        <!-- <h1>文章列表</h1> -->
        <router-link to='/article' tag='div'>
        <img v-lazy="data.imgUrl" alt="" class="img">
        <p>{{data.id}}</p>
        </router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    props:["data"]
    
}
</script>

<style lang="" scoped>
.img{
    /* background-color: white; */
    width: 100%;
    padding: 5px;
}

</style>