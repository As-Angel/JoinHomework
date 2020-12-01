<template>
  <div id="app">
    <img src="./assets/logo.png">
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from '@components/Tabbar'
//注册组件
import Tabbar from './components/Tabbar.vue'
export default {
  name: 'App',
  components:{
    tabbar,
    Tabbar
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
