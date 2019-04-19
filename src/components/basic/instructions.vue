<template>
    <div >
        <ul>
            <li v-for="(list, index) in lists" :key="index">
                <p>{{list.content}}</p>
            </li>
        </ul>
        <p>详细内容请查看vue.js官网：<a href="https://cn.vuejs.org/v2/guide/syntax.html#指令">https://cn.vuejs.org/v2/guide/syntax.html#指令</a></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:[
                {
                    id:0,
                    content:'v-bind:id="myId"'
                },
                 {
                    id:1,
                    content:'v-on:click="dosomething()"'
                },
                 {
                    id:2,
                    content:'v-if="boolean"'
                },
                 {
                    id:3,
                    content:'v-for=(item,index) in items  :key="index"'
                },
            ]
        }
    }
}
</script>
<style scoped>
ul li{
    margin-bottom: 20px;
    background: #86bee6;
    border: 1px solid #000;
    padding: 5px
}
ul li p{
    background: #ccc;
    padding: 5px 10px
}
</style>
