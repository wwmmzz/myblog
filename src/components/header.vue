<template>
<div class="container">
    <div class="row header">
        <div class="col-xs-6 col-md-6">
        <router-link to='/home' tag='div'>首页</router-link>
        </div>
        <div class="col-xs-6 col-md-6 right">
        <router-link to='/user' tag='span' v-if="state">我的</router-link>
        <router-link to='/login' tag='span' v-if="!state">登录</router-link>
        <!-- <router-link to='/aboutus' tag='span'>关于本站</router-link> -->
        </div>
    </div>
        <!-- <router-view></router-view> -->
        <!-- router-view的位置和home会不会覆盖header有关 -->

    </div>
</template>

<script>
export default {
    // data(){
    //     return{
    //         state : this.$store.state.loginstate
    //     }
    // },
    methods:{
        islogin(){
            if(this.$store.state.loginstate){
                return true
            }else{
                return false
            }
        }
    },
    computed:{
        state(){
            return this.$store.state.loginstate
            console.log(this.state)
        }
    },
    mounted(){
        console.log(this.$store.state.loginstate)
    }
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