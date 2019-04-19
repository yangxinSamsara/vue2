import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        activeIndex: 0,
        installList: [
            {
                title: '一、假设你已经安装好了node.js，未安装的话请到这里查看教程',
                grammer: '传送门：https://www.cnblogs.com/PatrickLiu/p/6971105.html'
            },
            {
                title: '二、安装webpack及webpack-cli',
                grammer: 'npm install webpack -g,npm install webpack-cli -g'
            },
            {
                title: '三、安装vue脚手架',
                grammer: 'npm install vue-cli -g'
            },
            {
                title: '四、初始化项目并运行',
                grammer: 'vue init webpack projectName,npm run dev'
            }
        ],
        count: 0,
        count1: 1,
        count2: 2,
        todos: [
            { id: 1, text: '1111', done: true },
            { id: 2, text: '2222', done: false },
            { id: 3, text: '3333', done: true },
        ]
    },
    getters: {
        getInstallList: (state) => {
            return state.installList
        },
        //从state中派生出一些状态,
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosLen: (state, getters) => {
            return getters.doneTodos.length
        },
        getTodoById: state => {
            return (id) => {
                return state.todos.find(todo => todo.id === id)
            }
        }


    },
    mutations: {
        setActiveIndex: (state, payload) => {
            state.activeIndex = payload
        },
        increment(state) {
            state.count++
        },
        reduce(state, payload) {
            state.count -= payload.num
        },
        incrementAsync(state,payload){
            state.count1+=payload
        }
    },
    actions: {
        increment({ commit }) {
            commit('increment')
        },
        // increment(content){
        //     content.commit('increment')
        // },
        incrementAsync({commit},payload){
            setTimeout(() => {
                commit('incrementAsync',payload.num)
            }, 1000);
        }
    }
})