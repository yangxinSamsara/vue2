<template>
  <div class="animation">
    <Header></Header>
    <div class="content">
      <ul>
        <li>
          <h3>
            <span class="title-pre">#</span>
            <span>css过渡</span>
          </h3>
          <section>
            <el-button @click="show1=!show1">toggle</el-button>
            <transition name="fade">
              <p v-if="show1">当show1的值为true时显示</p>
            </transition>
          </section>
        </li>
        <li>
          <h3>
            <span class="title-pre">#</span>
            <span>css动画</span>
          </h3>
          <section>
            <el-button @click="show2=!show2">toggle</el-button>
            <transition name="bounce">
              <p v-if="show2">当show2的值为true时显示</p>
            </transition>
          </section>
        </li>
        <li>
          <h3>
            <span class="title-pre">#</span>
            <span>自定义过渡的类名(animate.css)</span>
          </h3>
          <section>
            <el-button @click="show3=!show3">toggle</el-button>
            <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
              <p v-if="show3">当show2的值为true时显示</p>
            </transition>
          </section>
        </li>
         <li>
          <h3>
            <span class="title-pre">#</span>
            <span>列表过渡</span>
          </h3>
          <section>
            <el-button @click="add">add</el-button>
            <el-button @click="remove">remove</el-button>
            <transition-group name="list" tag="p">
                <span v-for="item in items" :key="item" class="list-item">{{item}}</span>
            </transition-group>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import animate from "animate.css";
export default {
  data() {
    return {
      show1: true,
      show2: true,
      show3:false,
      items:[1,2,3,4,5,6,7,8,9],
      nextNum:10
    };
  },
  components: { Header },
  methods: {
      randomIndex(){
          return Math.floor(Math.random()*this.items.length)
      },
      add(){
          this.items.splice(this.randomIndex(),0,this.nextNum++)
      },
      remove(){
          this.items.splice(this.randomIndex(),1)
      }
  },
};
</script>
<style scoped>
ul li {
  margin-bottom: 50px;
  background: #86bee6;
  border: 1px solid #000;
  padding: 5px;
  min-height: 180px;
}
ul li p {
  background: #ccc;
  padding: 5px 10px;
}
ul li span.title-pre {
  color: aqua;
  font-size: 24px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.list-item{
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active,.list-leave-active{
    transition: all .5s
}
.list-enter,.list-leave-to{
    opacity: 0;
    transform: translateY(30px)
}
</style>
