<template>
    <div>
        <Header></Header>
        <div class="success content" >
            <h1>这是提交成功后跳转到的页面！</h1>
            <p>获取传过来的数据使用$route.query,当前的name值=====》{{$route.query.name}}，email值===》{{$route.query.email}}</p>
            <el-button type="primary" @click="goBack">返回上一页</el-button>
        </div>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
export default {
    data(){
        return{

        }
    },
    components:{Header},
    methods: {
        goBack(){this.$router.go(-1)}
    },
}
</script>
<style scoped>

</style>
