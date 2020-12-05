import VueRouter from 'vue-router'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Personal from '../components/manage/personal'
import Class from '../components/manage/class'
import Grade from '../components/manage/grade'
import Paper from '../components/manage/paper'

import Login from '../components/login/index'
// import Layout from '../views/element/layout'
import Manage from '../components/list/manage'

// import { component } from 'vue/types/umd'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/ components/login/Login'

// const Personal = () => import('')


Vue.use(VueRouter)
Vue.use(ElementUI)

// 配置映射关系
const routes = [
  // 一个url对应一个组件
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },

  {
    path:'/list',
    component:Manage,
    children:[
      {
        path:'',
        redirect:'personal'
      },
      {
        path:'personal',
        component:Personal
      },
      {
        path:'class',
        component:Class
      },
      {
        path:'paper',
        component:Paper
      },
      {
        path:'grade',
        component:Grade
      }
    ]
  }
]

const router=  new VueRouter({
  routes
})

// 将router对象传入到vue实例
export default router
