<template>
  <div class="install mgauto">
    <Header></Header>
    <div class="content">
      <h1>安装脚手架及初始化项目教程</h1>
      <ul>
        <li v-for="item in installList" :key="item.title">
          <h2>{{item.title}}</h2>
          <p>{{item.grammer}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      installList: "getInstallList"
    })
  },
  components: { Header }
};
</script>
<style scoped>
</style>
