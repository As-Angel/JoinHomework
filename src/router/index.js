import VueRouter from 'vue-router'
import Vue from 'vue'

import Personal from '../components/personal'
import Class from '../components/class'
import Grade from '../components/grade'
import Paper from '../components/paper'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/ components/login/Login'

Vue.use(VueRouter)

// 配置映射关系
const routes = [
  // 一个url对应一个组件
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/class',
    component:Class
  },
  {
    path:'/paper',
    component:Paper
  },
  {
    path:'/grade',
    component:Grade
  }
]

const router=  new VueRouter({
  routes
})

// 将router对象传入到vue实例
export default router
