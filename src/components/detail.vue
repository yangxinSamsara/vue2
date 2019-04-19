<template>
    <div >
        <Header></Header>
        <div class="detail content">
            <h1>这是新闻详情页{{id}}</h1>
            <p>使用this.$route.params.id获取id的值，用id可以查询新闻详情<span>,当前id值{{this.$route.params.id}}</span></p>
        </div>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
export default {
    props:['id'],
    data(){
        return{

        }
    },
    components:{Header}
}
</script>
<style scoped>

</style>
