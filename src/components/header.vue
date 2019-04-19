<template>
  <div class="header">
    <header class="clearfix">
      <div class="logo">
        <img :src="logo" alt="logo">
      </div>
      <div class="nav" :class="{active:navActive}">
        <ul >
          <li v-for="(nav, index) in navList" :key="nav.path" @click="linkPath(nav,index)" :class="{active:activeIndex==index}">
            <router-link :to="{path:nav.path}" >{{nav.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="enlarge" @click="clickBtn">
        <div class="icon"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navActive:false,
      navBtnActive:false,
      logo: require("../assets/logo.png"),
      navList: [
        {
          path: "/",
          name: "安装"
        },
        {
          path: "/basicgrammer",
          name: "基础语法"
        },
        {
          path: "/vuecomponent",
          name: "组件"
        },
        {
          path: "/lifecycle",
          name: "生命周期"
        },
        {
          path: "/routing",
          name: "路由"
        },
        {
          path: "/animation",
          name: "动画"
        },
        {
          path: "/vuex",
          name: "vuex"
        }
      ]
    };
  },
  methods: {
    clickBtn(){
      this.navActive=!this.navActive;
      this.navBtnActive=!this.navBtnActive;
    },
    linkPath(nav,index){
      this.$store.commit('setActiveIndex',index)
    }
  },
  computed:{
    activeIndex(){
      return this.$store.state.activeIndex;
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        // this.activeIndex = to.path;
      },
      immediate: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0 5px 5px #333;
  background: #fff;
  z-index: 99;
}
.clearfix {
  content: "";
  clear: both;
  height: 0;
  display: block;
}
header {
  max-width: 996px;
  margin: 0 auto;
}
.logo {
  float: left;
  padding: 5px 0;
}
.logo img {
  width: 50px;
  height: 50px;
  display: inline-block;
}
.nav{
  float: left;
  margin-left: 40px;
  padding: 5px;
}
.nav ul li {
  list-style: none;
  float: left;
}
ul li a {
  padding: 0 20px;
  display: block;
  color: #333;
  text-align: center;
  font-size: 18px;
  line-height: 50px;
  font-weight: bold;
  transition: all 0.5s;
  text-decoration: none;
}

ul li.active a,
ul li a:hover {
  color: rgb(12, 8, 226);
}

.enlarge {
  position: relative;
  float: right;
  cursor: pointer;
  z-index: 30;
  height: 36px;
  width: 36px;
  right: 15px;
  top: 14px;
  border-radius: 2px;
  display: none
}
.enlarge .icon {
  background: #333;
  height: 3px;
  position: absolute;
  top: 15px;
  border-radius: 2px;
  width: 80%;
}
.enlarge .icon::before {
  top: -9px;
}
.enlarge .icon::after {
  top: 9px;
}
.enlarge .icon::before,
.enlarge .icon::after {
  content: "";
  border-radius: 2px;
  background: #333;
  height: 3px;
  position: absolute;
  width: 36px
}
.enlarge .icon.active{
  width: 0;
}
.enlarge .icon.active::before{
  transform: translateY(9px) rotate(45deg)
}
.enlarge .icon.active::after{
  transform: translateY(-9px) rotate(-45deg)
}
@media (max-width: 768px){
  .enlarge{
    display: block
  }
  .nav{
    position: absolute;
    float: none;
    margin-left: 0;
    padding: 5px 0;
    background: #fff;
    z-index: 99;
    width: 150px;
    top: 60px;
    left: -155px;
    transition: all .5s;
    box-shadow: 1px 1px 4px rgb(12, 8, 226);
    border-radius: 0 5px 5px 0;
  }
  .nav.active{
    left: 0
  }
  .nav ul li{
    float: none
  }
  .nav ul li a{
    font-size: 14px; 
    line-height: 40px
  }
  .logo{margin-left: 20px}
}
</style>
