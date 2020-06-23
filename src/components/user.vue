<template>
    <div id="user">
        <h1>用户</h1>
        <p>我喜欢的</p>
        <p v-for="item in list" :key="item.id">{{item.tit}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        list(){
            return this.$store.state.likelist
        }
    }
}
</script>

<style lang="" scoped>

</style>