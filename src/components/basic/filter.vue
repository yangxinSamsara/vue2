<template>
  <div>
    <ul>
      <li>
        <h3>
          <span class="title-pre">#</span>
          <span>过滤器基础例子</span>
        </h3>
        <p>这是原始的值：{{message}}</p>
        <p>这是过滤后的值：{{message | capitalize}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello"
    };
  },
  filters: {
    capitalize(value) {
      return value.toString().toUpperCase();
    }
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
