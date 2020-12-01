
// Router.js定义router，就是定义路径到组件的映射

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Film from '@/views/Film.vue'
// import Cinema from '@/views/Cinema.vue'

// 引入组件
import home from "./home.vue";
import about from "./about.vue"
import VueRouter from 'vue-router';

// 告诉vue使用vueRouter
Vue.use(VueRouter);

// Vue.use(Router) //注册路由模板

const routes = [
  {
    path:"/home",
    component:home
  },
  {
    path:"/about",
    component:about
  }
]

var router = new VueRouter({
  routes
})
export default router;

//导出
// export default new Router({
//   routes: [
//     {
//       path: '/film',
//       // name: 'HelloWorld',
//       // component: HelloWorld
//       component:Film
//     },
//     {
//       path:'/cinema',
//       component:Cinema
//     },
//     {
//       path:'/',
//       redirect:'/film'
//     }
//   ]
// })
