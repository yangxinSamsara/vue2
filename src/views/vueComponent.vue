<template>
  <div class="component mgauto">
    <Header></Header>
    <div class="content">
      <div class="comp-demo">
        <comp-demo>这些内容显示在插槽</comp-demo>
        <comp-demo style="color:red" slot="a">aaaaaaa红色</comp-demo>
        <comp-demo style="color:blue" slot="b">bbbbbbb蓝色</comp-demo>
      </div>
      <div class="demo-two" :style="{fontSize:fontsize+'px'}">
        <comp-demo-two
          @add_fontsize="add_fontsize"
          @reduce_fontsize="reduce_fontsize"
          v-for="(post, index) in posts"
          :key="index"
          :postFromFather="post"
        ></comp-demo-two>
      </div>
      <div class="dynamic">
        <el-button type="primary" @click="dynamicView('A')">组件A</el-button>
        <el-button type="primary" @click="dynamicView('B')">组件B</el-button>
        <el-button type="primary" @click="dynamicView('C')">组件C</el-button>
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import compDemo from "@/components/compDemo.vue";
import compDemoTwo from "@/components/compDemoTwo.vue";
import dynamicA from "@/components/dynamic/dynamicA.vue";
import dynamicB from "@/components/dynamic/dynamicB.vue";
import dynamicC from "@/components/dynamic/dynamicC.vue";
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      fontsize: 24,
      currentView: dynamicA
    };
  },
  components: { Header, compDemo, compDemoTwo, dynamicA, dynamicB, dynamicC },
  methods: {
    add_fontsize(val) {
      this.fontsize += val;
    },
    reduce_fontsize(val) {
      this.fontsize -= val;
    },
    dynamicView(a) {
      this.currentView = "dynamic" + a;
    }
  }
};
</script>
<style scoped>
.demo-two {
  border: 1px solid black;
  min-height: 200px;
}
</style>
