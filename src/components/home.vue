<template>
    <div id="home">
        <h1>首页</h1>
        <msvg></msvg>
        <item></item>
        <ad></ad>
        <router-view></router-view>
    </div>
</template>

<script>
import msvg from './children/svg'
import item from './children/item'
import ad from './children/ad'

export default {
    components: {
        msvg,
        item,
        ad
    }
    
}
</script>

<style lang="" scoped>

</style>