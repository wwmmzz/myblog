<template>
<div class="container">
    <div class="row header">
        <div class="col-xs-6 col-md-6">
        <router-link to='/home' tag='div'>首页</router-link>
        </div>
        <div class="col-xs-6 col-md-6 right">
        <router-link to='/user' tag='span'>我的</router-link>
        <router-link to='/login' tag='span'>登录</router-link>
        <router-link to='/aboutus' tag='span'>关于本站</router-link>
        </div>
    </div>
        <router-view></router-view>
        <!-- router-view的位置和home会不会覆盖header有关 -->

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="" scoped>
/* @import 'bootstrap'; */
.header{
    /* position: fixed; */
    background-color: white;
    font-size: 30px;
    /* z-index: 10; */
}
.right{
    text-align: right;
}
</style>