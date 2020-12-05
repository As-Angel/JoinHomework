<template>
  <div id="app">
    <div>
      <ul>
        <li>
          <router-link to="/personal">个人中心</router-link>
        </li>
        <li>
          <router-link to="/class">班级管理</router-link>
        </li>
        <li>
          <router-link to="/paper">试卷管理</router-link>
        </li>
        <li>
          <router-link to="/grade">成绩管理</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
