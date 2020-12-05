<template>
<div>
  <div class="box left">
    <ul>
        <li>
          <router-link to="/list/personal">个人中心</router-link>
        </li>
        <li>
          <router-link to="/list/class">班级管理</router-link>
        </li>
        <li>
          <router-link to="/list/paper">试卷管理</router-link>
        </li>
        <li>
          <router-link to="/list/grade">成绩管理</router-link>
        </li>
</ul>
  </div>
  <div class="view left">
    <router-view></router-view>
  </div>

  <div class="data left">
    <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input></el-input>
            </td>
            <td colspan="2">
              <el-button type="primary">修改</el-button>
            </td>
          </tr>

          <tr>
            <td>邮箱</td>
            <td>
              <el-input ></el-input>
            </td>
            <td><el-button type="primary">修改</el-button></td>
          </tr>

           <tr>
            <td>密码</td>
            <td colspan="2">
              <el-button type="primary">重置密码</el-button>
            </td>
          </tr>
        </table>
  </div>

</div>
</template>
