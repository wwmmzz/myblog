<template>
    <div id="login">
        <div><span>用户名:</span> <input type="text" v-model="user.name"></div>
        <div><span>密码:</span> <input type="text" v-model="user.password"></div>
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user : {
                name : '',
                password : ''
            }
        }
    },
    methods : {
        login(){
            this.$store.commit("login", this.user)
            if(this.$store.state.loginstate){
                this.$router.replace(
                    {
                        path : "/home"
                    }
                )
            }
        }
    }
}
</script>

<style lang="" scoped>

</style>