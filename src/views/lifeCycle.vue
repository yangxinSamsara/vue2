<template>
  <div class="install">
    <Header></Header>
    <div class="content">
      <p>{{text}}<el-button @click="changeText">改变文本</el-button>
      <el-button @click="destory">点击销毁</el-button>
      </p>
      <p style="padding:0 120px">
        <img :src="lifecycle" alt="生命周期">
      </p>
      <p>beforeCreate（此时date、method和el均没有初始化，可以在此加载loading）
        <br>created（此时date和method初始化完成，但是DOM节点并没有挂载，判断是否有el节点，如果有则编译template，如果没有则使用vm.$mount创建一个默认节点，此时可以在DOM渲染之前进行数据的初始化和method的自执行等）
      </p>
      <p>beforeMount（编译模板，并且将此时在el上挂载一个虚拟的DOM节点）
        <br>mounted（编译模板，且将真实的DOM节点挂载在el上）
      </p>
      <p>beforeUpdate（在数据有更新时，进入此钩子函数，虚拟DOM被重新创建）
        <br>updated（数据更新完成时，进入此钩子函数）
      </p>
      <p>beforeDestory（组件销毁前调用，此时将组件上的watchers、子组件和事件都移除掉）
        <br>destoryed（组件销毁后调用）
      </p>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
export default {
  data() {
    return {
      lifecycle: require("../assets/lifecycle.png"),
      text:'改变前的值'
    };
  },
  components: { Header },
  beforeCreate() {
    alert("此时date、method和el均没有初始化，可以在此加载loading");
  },
  created() {
    alert("此时date和method初始化完成，但是DOM节点并没有挂载，判断是否有el节点，如果有则编译template，如果没有则使用vm.$mount创建一个默认节点，此时可以在DOM渲染之前进行数据的初始化和method的自执行等");
  },
  beforeMount() {
    alert("编译模板，并且将此时在el上挂载一个虚拟的DOM节点");
  },
  mounted() {
    alert("译模板，且将真实的DOM节点挂载在el上")
  },
  beforeUpdate() {
    alert("在数据有更新时，进入此钩子函数，虚拟DOM被重新创建");
  },
  updated() {
    alert("数据更新完成时，进入此钩子函数");
  },
  beforeDestroy() {
    alert("组件销毁前调用，此时将组件上的watchers、子组件和事件都移除掉");
  },
  destroyed() {
    alert("组件销毁后调用");
  },
  methods: {
      changeText(){
          this.text="改变后的值"
      },
      destory(){
        this.$destroy()
      }
  },
};
</script>
<style scoped>
.content p {
    padding: 0 120px
}
.content p img {
  max-width: 100%;
}
</style>
