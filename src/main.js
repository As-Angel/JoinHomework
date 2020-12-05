import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
// 导入Router
import router from './router/index';

Vue.use(Element);

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-c halk/index.css'

//自己写的样式
// import './style/theme.css'
// import './style/characters.css'

// 注册element-ui
// Vue.use(ElementUI)
// Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';

// Vue.use(ElementUI);

