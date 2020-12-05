<template>
  <div id="app">
    <div>
        <router-link to="/login">立即登录</router-link>
        <!-- <router-link to="/layout">布局</router-link> -->
        <router-link to="/list">管理</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import 'style/manage.css'; /*引入公共样式*/

</style>
