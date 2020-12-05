<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="content">1</div></el-col>
      <el-col :span="6"><div class="content">1</div></el-col>
      <el-col :span="6"><div class="content">1</div></el-col>
      <el-col :span="6"><div class="content">1</div></el-col>
    </el-row>
    <el-container>
      <el-header class="head">头</el-header>
      <el-aside class="nav">侧边栏</el-aside>
      <el-main class="main">主要内容</el-main>
      <el-footer class="footer">底栏</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.content{
  background-color: #000;
  color: #FFF;
}
.head{
  background-color:blue;
}
.nav{
  background-color: red;
}
.main{
  background-color: green;
}
.footer{
  background-color: purple;
}
</style>
