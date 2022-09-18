<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse?'65px':'230px'">
        <el-menu default-active="dashboard" router class="el-menu-vertical-demo" :collapse="isCollapse"
          background-color="#304156" text-color="#bfcbd9" active-text-color="#409eff">
          <el-menu-item index="dashboard">
            <i class="el-icon-s-home"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu :index="item.name" v-for="item in menus" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group v-for="ele in item.children" :key="ele.id">
              <el-menu-item :index="ele.name">
                <i :class="ele.icon"></i>
                {{ele.title}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="head">
            <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="isCollapse=!isCollapse"></i>
            <div class="link">
              <router-link to="/productList">{{leader}}</router-link>
              {{title}}
            </div>
            <div class="right">
              欢迎管理员:{{nikename}}
              <img src="../assets/logo.png" alt="">
              <el-dropdown @command="quite">
                <span class="el-dropdown-link">
                  <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>乐居客户端预览</el-dropdown-item>
                  <el-dropdown-item>乐居后台预览</el-dropdown-item>
                  <el-dropdown-item>接口地址</el-dropdown-item>
                  <el-dropdown-item>不凡官网</el-dropdown-item>
                  <el-dropdown-item>gitee</el-dropdown-item>
                  <el-dropdown-item>vue-element-admin</el-dropdown-item>
                  <el-dropdown-item divided>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        <el-collapse>
          <el-collapse-item title="商品管理介绍">
            <div>商品管理模块可以对客户端的商品进行增删改查等相关操作,来控制客户端商品的列表展示和商品详情</div>
          </el-collapse-item>
        </el-collapse>
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
      menus: [],
      isCollapse: false,
      title: '',
      leader: '',
      pathh: '',
      nikename: ''
    }
  },
  created() {
    getInitMenus().then(res => {
      console.log(res);
      this.menus = res.data.data.permissionList
      this.nikename = localStorage.getItem('username')
    })
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log(newVal);
        this.title = newVal.meta.title
        this.leader = newVal.meta.leader
        this.pathh = newVal.meta.path
      },
      immediate: true
    }
  },
  methods: {
    quite() {
      console.log('111');
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
}
</script>
<style lang="scss" scoped>
.el-menu {
  height: 100%;
}

i {
  font-size: 26px;
}
::v-deep .el-header{
  text-align: left;
    margin-top: 10px;
    height: 100px !important;
}
.head {
  text-align: left;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    flex: 1;
    margin-left: 15px;
  }

  .right {
    img {
      width: 30px;
      height: 30px;
    }
  }
}

.el-aside {
  text-align: left;
  height: 100vh;
}

.el-main {
  text-align: center;
  height: 87vh;
  background-color: #f0f2f5;
}
</style>
