<template>
  <div class="home">
    <el-container>
      <el-aside width="230px">
        <el-menu router class="el-menu-vertical-demo"
          background-color="#304156" text-color="#bfcbd9" active-text-color="#409eff">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu :index="item.name" v-for="item in menus" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group v-for="ele in item.children" :key="ele.id">
              <el-menu-item :index="ele.name">{{ele.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <i class="el-icon-s-fold"></i>
        </el-header>
<el-main>

  <router-view></router-view>
</el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script>
import { getInitMenus } from '@/utils/api';
// @ is an alias to /src


export default {
  name: 'HomeView',
  data() {
    return {
      menus:[]
    }
  },
  created() {
    getInitMenus().then(res => {
      console.log(res);
      this.menus = res.data.data.permissionList
    })
  },
}
</script>
<style lang="scss" scoped>
  .el-menu{
    height: 100%;
  }
i{
  font-size: 26px;
}
.el-header {
  text-align: left;
  margin-top: 10px;
}

.el-aside {
  text-align: left;
  height: 100vh;
}

.el-main {
  text-align: center;
}
</style>
