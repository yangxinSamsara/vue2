<template>
  <div class="basic-grammer mgauto">
    <Header></Header>
    <div class="content">
      <h1>基础语法</h1>
      <div class="children">
        <router-link to="/basicgrammer/interpolation">差值表达式</router-link>
        <router-link to="/basicgrammer/instructions">常用指令</router-link>
        <router-link to="/basicgrammer/computed">计算属性及监听</router-link>
        <router-link to="/basicgrammer/cssStyle">样式绑定</router-link>
        <router-link to="/basicgrammer/rendering">条件渲染</router-link>
        <router-link to="/basicgrammer/listloop">列表循环</router-link>
        <router-link to="/basicgrammer/filter">过滤器使用</router-link>
        <router-link to="/basicgrammer/event">事件处理</router-link>
        <router-link to="/basicgrammer/model">输入框绑定</router-link>
      </div>
      <div class="child-content">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
export default {
  data() {
    return {};
  },
  components: { Header },
  watch: {
      '$route'(to,from){
          console.log(to,from);
      }
  },
};
</script>
<style scoped>
.children{
    border: 1px solid #ccc;
}
.children a{
    text-decoration: none;
    padding: 10px 15px;
    background: #fff;
    color: #333;
    font-size: 14px;
    display: inline-block;
    margin: 0 20px 20px 0;
    border-radius: 15px;
}
.children a.router-link-active{
    background: rgb(56, 173, 209);
    color: #333;    
}
.child-content{
    background: #fff;
    padding: 5px
}
</style>
