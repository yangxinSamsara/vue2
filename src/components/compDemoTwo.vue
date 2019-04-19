<template>
  <div style="border:1px solid red">
    <h3>这是子组件</h3>
    <p>这是来自父组件的标题{{postFromFather.title}}</p>
    <p>
      <el-button @click="addFontSize">增加字号</el-button>
      <el-button @click="reduceFontSize">减小字号</el-button>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    postFromFather: Object
  },
  data() {
    return {};
  },
  methods:{
      addFontSize(){
          this.$emit("add_fontsize",1)
      },
      reduceFontSize(){
          this.$emit("reduce_fontsize",2)
      }
  }
};
</script>
<style scoped>
</style>
