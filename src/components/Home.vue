<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="header-left">
        <span>教务系统管理后台</span>
        <!-- <i :class="isCollapse ? 'coll el-icon-s-unfold' : 'coll el-icon-s-fold'" @click="isCollapse = !isCollapse"></i> -->
        </div>
        <div>
          退出
        </div>
      </el-header>
      <el-container class="main">
        <Menu></Menu>
        <el-main>
          <el-card>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item,i) in $route.matched" :key="i">
                <strong>{{item.name}}</strong>
                </el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <router-view></router-view>
          <Footer></Footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './common/Menu'
import Footer from './common/Footer'
export default {
  name: 'Home',
  components:  {
    Menu,
    Footer
  },
  data () {
    return {
      
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .header-left {
      .coll {
        cursor: pointer;
      }
    }
  }
  
  .main {
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
    }

  }
}
</style>
