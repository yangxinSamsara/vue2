import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',//使用history模式，url不会带有#，想正常的url，例如http://yoursite.com/user/id,好看一些。不过需要后端进行相应配置
  routes: [
    {
      path: '/',
      name: 'install',
      component:()=>import('@/views/install.vue')
    },
    {
      path: '/basicgrammer',
      name: 'basicGrammer',
      component: ()=>import('@/views/basicGrammer.vue'),
      redirect:'/basicgrammer/interpolation',
      children:[
        {
          path:'interpolation',//嵌套路由，前边不需要加“/”，
          component:()=>import('@/components/basic/interpolation.vue')
        },
        {
          path:'instructions',
          component:()=>import('@/components/basic/instructions.vue')
        },
        {
          path:'computed',
          component:()=>import('@/components/basic/computed.vue')
        },
        {
          path:'cssStyle',
          component:()=>import('@/components/basic/cssStyle.vue')
        },
        {
          path:'rendering',
          component:()=>import('@/components/basic/rendering.vue')
        },
        {
          path:'listloop',
          component:()=>import('@/components/basic/listloop.vue')
        },
        {
          path:'filter',
          component:()=>import('@/components/basic/filter.vue')
        },
        {
          path:'event',
          component:()=>import('@/components/basic/event.vue')
        },
        {
          path:'model',
          component:()=>import('@/components/basic/model.vue')
        }
      ]
    },
    {
      path: '/vuecomponent',
      name: 'vueComponent',
      component: ()=>import('@/views/vueComponent.vue')
    },
    {
      path: '/lifecycle',
      name: 'lifeCycle',
      component: ()=>import('@/views/lifeCycle.vue')
    },
    {
      path: '/routing',
      name: 'routing',
      alias:'/routingAlias',//别名
      components:{
        default:()=>import('@/views/routing.vue'),
        aaa:()=>import('@/views/routingaaa.vue')
      }
    },
    {
      path: '/detail/:id',//命名路由
      name: 'detail',
      component: ()=>import('@/components/detail.vue'),
      props:true
    },
    {
      path: '/success',
      name: 'success',
      component: ()=>import('@/components/submitSuccess.vue')
    },
    {
      path: '/animation',
      name: 'animation',
      component: ()=>import('@/views/animation.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: ()=>import('@/views/vuex.vue')
    },
    {
      path: '*',//放最后，通常用于客户端404错误
      name: '404',
      component: ()=>import('@/views/404.vue')
    }
  ]
})
