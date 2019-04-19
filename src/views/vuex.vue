<template>
  <div class="install">
    <Header></Header>
    <div class="content">
      <h3>
        <span class="title-pre">#</span>
        <span>什么是Vuex？</span>
      </h3>
      <p>
        Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
        它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
      </p>
      <ul>
        <li>
          <h3>
            <span class="title-pre">#</span>
            <span>State(数据源)</span>
          </h3>
          <p>这是取自于store（仓库）中的state(状态)中的count值===>{{count}}</p>
          <p>这是取自于store（仓库）中的state(状态)中的count1值===>{{count1}}</p>
          <p>这是取自于store（仓库）中的state(状态)中的count2值===>{{count2}}</p>
          <p>count与局部组件的localCount相加countPlus===>{{countPlus}},局部组件的值{{localComputed}}</p>
        </li>
        <li>
          <h3>
            <span class="title-pre">#</span>
            <span>Getter(可以认为时store的计算属性)</span>
          </h3>
          <p>(通过属性访问this.$store.getters.doneTodos,会产出缓存)这是state中完成的todos==>{{this.$store.getters.doneTodos}},它的长度为{{this.$store.getters.doneTodosLen}}</p>
          <p>(通过方法访问this.$store.getters.getTodoById(2)，每次都会调用不缓存)===>{{this.$store.getters.getTodoById(2)}}</p>
          <p>通过mapGetters辅助函数访问{{doneTodos}}</p>
        </li>
        <li>
          <h3>
            <span class="title-pre">#</span>
            <span>Mutation(更改vuex的store中的状态的唯一方法是提交mutation，mutation类似于事件)</span>
          </h3>
          <p>
            触发类型为increment的mutation，以相应的type调用store.commit方法(this.$store.commit('increment'))
            <button
              @click="addCount"
            >add count</button>
            {{count}}
          </p>
          <p>
            提交载荷
            <button @click="reduceCount">reduce count</button>
            {{count}}
          </p>
        </li>
        <li>
          <h3>
            <span class="title-pre">#</span>
            <span>Action(Action类似mutation，不同在于Action提交的是mutation，而不是直接改变状态，Action可以包含任意异步操作)</span>
          </h3>
          <p>
            Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
            因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters,Action通过store.dispath触发
          </p>
          <p>
            通过store.dispatch触发(this.$store.dispatch('increment'))
            <button
              @click="dispatchIncrement"
            >通过store.dispatch触发改变count值</button>
            {{count}}
          </p>
          <p>
            载荷方式
            <button @click="asyncIncrement">asyncIncrement count1</button>
            {{count1}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//当需要多个状态的时候，使用mapState辅助函数
import { mapState } from "vuex";
//mapGetters仅仅是将store的getter映射到局部计算属性
import { mapGetters } from "vuex";

import Header from "@/components/header.vue";
export default {
  data() {
    return {
      localCount: 5
    };
  },
  components: { Header },
  //从store中获取状态的最简单方法就是在计算属性中返回某个状态
  //   computed: {
  //       count(){
  //           return this.$store.state.count
  //       },
  //   },
  //当需要获取多个状态值的时候，使用mapState辅助函数生成计算属性
  // computed:mapState({
  //     count:state=>state.count,
  //     count1:state=>state.count1,
  //     count2:state=>state.count2,
  //     countPlus(state){
  //         return state.count+this.localCount
  //     }
  // })

  //mapState与局部计算属性混合使用
  computed: {
    localComputed() {
      return this.localCount;
    },
    //使用对象展开运算符
    ...mapState({
      count: state => state.count,
      count1: state => state.count1,
      count2: state => state.count2,
      countPlus(state) {
        return state.count + this.localCount;
      }
    }),
    ...mapGetters(["doneTodos"])
  },
  methods: {
    addCount() {
      this.$store.commit("increment");
    },
    //通常载荷为对象
    reduceCount() {
      this.$store.commit("reduce", {
        num: 5
      });
    },
    dispatchIncrement() {
      this.$store.dispatch("increment");

      //对象方式
      // this.$store.dispatch({
      //     type:'increment',
      //     num:10
      // })
    },
    asyncIncrement() {
      //载荷方式
      this.$store.dispatch("incrementAsync", {num:10}) 
    //对象方式
    // this.$store.dispatch({
    //     type:'incrementAsync',
    //     num:10
    // })
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
