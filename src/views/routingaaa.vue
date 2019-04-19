<template>
  <div class="mgauto">
    <Header></Header>
    <div class="content" style="background:red">
      <p>这里是命名视图</p>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
export default {
  data() {
    return {};
  },
  computed: {
  },
  components: { Header }
};
</script>
<style scoped>
</style>
