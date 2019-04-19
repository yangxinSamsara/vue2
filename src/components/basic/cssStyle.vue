<template>
  <div>
    <ul>
      <li>
        <h3>
          <span class="title-pre">#</span>
          <span>对象语法</span>
        </h3>
        <p>
          <span>模板：</span>
          <span>{{template1}}</span>
        </p>
        <p>
          <span>如果在data中定义isActive:true,hasError:false,则渲染的结果为：</span><br>
          <span>{{template1Result}}</span>
        </p>
      </li>
       <li>
        <h3>
          <span class="title-pre">#</span>
          <span>数组语法</span>
        </h3>
        <p>
          <span>模板：</span>
          <span>{{template2}}</span>
        </p>
        <p>
          <span>如果在data中定义activeClass:active,errorClass:error,则渲染的结果为：</span><br>
          <span>{{template2Result}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        template1:'<div class="static" :class="{active:isActive,danger:hasError}"></div>',
        template1Result:'<div class="static active"></div>',
         template2:'<div class="static" :class="[activeClass,errorClass]"></div>',
        template2Result:'<div class="static active error"></div>'
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
