<template>
  <div>
    <ul>
      <li>
        <h3>
          <span class="title-pre">#</span>
          <span>监听事件</span>
        </h3>
        <el-button type="success" v-on:click="counter += 1">点击加1</el-button>
        <p>按钮被点击了{{counter}}次</p>
      </li>
      <li>
        <h3>
          <span class="title-pre">#</span>
          <span>事件带参数</span>
        </h3>
        <el-button type="success" v-on:click="say('Hi')">sayHi</el-button>
        <el-button type="success" v-on:click="say('Hello')">sayHello</el-button>
      </li>
    </ul>
    <p><a href="https://cn.vuejs.org/v2/guide/events.html">点击查看更多关于事件的详细内容</a></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods:{
      say(message){
          this.$message(`say ${message}`)
      }
  }
};
</script>
<style scoped>
ul li {
  margin-bottom: 20px;
  background: #86bee6;
  border: 1px solid #000;
  padding: 5px;
}
ul li p {
  background: #ccc;
  padding: 5px 10px;
}
ul li span.title-pre {
  color: aqua;
  font-size: 24px;
}
</style>
