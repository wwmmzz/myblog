<template>
    <div class="header">
        <router-link to='/home' tag='div'>首页</router-link>
        <router-link to='/user' tag='div'>我的</router-link>
        <router-link to='/login' tag='div'>登录</router-link>
        <router-link to='/aboutus' tag='div'>关于本站</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="" scoped>

</style>