<template>
  <div>
    <ul>
      <li class="mg20">
        <h3>
          <span class="title-pre">#</span>
          <span>文本</span>
        </h3>
        <p>
          <el-input v-model="message" style="width:auto" placeholder="请输入内容"></el-input>
          {{message}}
        </p>
      </li>
      <li class="mg20">
        <h3>
          <span class="title-pre">#</span>
          <span>复选框</span>
        </h3>
        <p>
          <el-checkbox-group v-model="checkList">
            <ElCheckbox label="复选框1"></ElCheckbox>
            <ElCheckbox label="复选框2"></ElCheckbox>
            <ElCheckbox label="复选框3"></ElCheckbox>
          </el-checkbox-group><br>
          <span>选择的值{{checkList}}</span>
        </p>
      </li>
      <li class="mg20">
        <h3>
          <span class="title-pre">#</span>
          <span>下拉选择框</span>
        </h3>
        <p>
          <el-select v-model="selectValue" placeholder="请选择">
            <el-option v-for="(select,index) in selectList" :key="index" :label="select.label" :value="select.value"></el-option>
          </el-select>
          <span>选择的值{{selectValue}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      checkList:[],
      selectList:[
          {value:'red',label:'红色'},
          {value:'blue',label:'蓝色'},
          {value:'black',label:'黑色'},
          {value:'yellow',label:'黄色'}
      ],
      selectValue:''
    };
  }
};
</script>
<style scoped>
ul li.mg20 {
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
