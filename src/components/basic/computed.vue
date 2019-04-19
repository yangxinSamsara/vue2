<template>
  <div>
    <ul>
      <li>
        <h3>
          <span class="title-pre">#</span>
          <span>基础例子</span>
        </h3>
        <p>这是原始的值：{{message}}</p>
        <p>这是计算属性反转后的值：{{reversedMessage}}</p>
      </li>
      <li>
        <h3>
          <span class="title-pre">#</span>
          <span>计算属性缓存vs方法</span>
        </h3>
        <p>这是计算属性缓存的值：{{now}}</p>
        <p>这是方法获取的值：{{getNow()}}</p>
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
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    now: function() {
      return Date.now();
    }
  },
  methods: {
    getNow: function() {
      return Date.now();
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
