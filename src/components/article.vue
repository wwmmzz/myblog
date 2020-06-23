<template>
    <div id="article">
        <h1>{{list.tit}}</h1>
        <span @click="add">like</span>
        <p>{{list.article}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id : parseInt(this.$route.params.id),
            list:{}
        }
    },
    mounted(){
        let id = this.id;
        console.log(id)
        let myarticle = this.$store.state.list.find(item=>item.id === id )
        console.log(myarticle)
        this.list = myarticle
        console.log(this.list)
    },
    methods : {
        add(){
            this.$store.commit("addlike", this.id)
            console.log(this.$route.params)
        }
    }
    
}
</script>

<style lang="" scoped>

</style>