<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="header-left">
        <span v-show="!isCollapse">教务系统管理后台</span>
        <i :class="isCollapse ? 'coll el-icon-s-unfold' : 'coll el-icon-s-fold'" @click="isCollapse = !isCollapse"></i>
        </div>
        <div>
          退出
        </div>
      </el-header>
      <el-container class="main">
        <el-aside :width="isCollapse ? '65px' : '200px'">
          <!-- default-active默认展开 -->
          <el-menu 
          router
          :default-active="activePath" 
          class="el-menu-vertical-demo" 
          @open="handleOpen" 
          @close="handleClose" 
          :collapse="isCollapse"
          >
            <template v-for="(item, index) in menus">
              <el-submenu :index="item.path" :key="index" v-if="!item.hidden">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">{{item.name}}</span>
                </template>
                <el-menu-item-group v-for="(child,i) in item.children" :key="i">
                  <el-menu-item :index="child.path">{{child.name}}</el-menu-item>
                  
                </el-menu-item-group>
              </el-submenu>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: false,
      menus:[],
      activePath: ''
    }
  },
  created() {
    // console.log(this.$router.options.routes)
    this.menus = this.$router.options.routes
    this.activePath = this.menus[2].children[0].path
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
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
    
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
      .el-menu {
        height: 100%;
      }
    }
    
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

  }
}
</style>
