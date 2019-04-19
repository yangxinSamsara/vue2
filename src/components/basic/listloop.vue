<template>
  <div>
    <ul>
      <li>
        <h3>
          <span class="title-pre">#</span>
          <span>用 v-for 把一个数组对应为一组元素</span>
        </h3>
        <p>
          <span>模板：</span>
          <span>{{template1}}</span>
        </p>
        <p>
          <span>数据：</span>
          <br>
          <span><pre>{{data1}}</pre></span>
        </p>
        <p>
          <span>结果为：</span>
          <br>
          <span v-html="template1Result"></span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      template1: '<li v-for="item in items">{{ item.message }}</li>',
      data1: 'data(){\n  items:[\n  {message:11111},\n  {message:22222}\n  ]\n}',
      template1Result: "<li>11111</li><li>22222</li>"
    };
  }
};
</script>
<style scoped>
ul li {
  margin-bottom: 50px;
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
