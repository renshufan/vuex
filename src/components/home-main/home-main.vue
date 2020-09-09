<template>
  <div class="page">
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="[]" unique-opened router>
          <el-submenu :index="first.path" v-for="(first, i) in router">
            <template slot="title"
              ><i class="el-icon-message"></i>{{ first.meta.title }}</template
            >

            <el-menu-item
              :index="first.path + '/' + second.path"
              v-if="!second.children"
              v-for="(second, i) in first.children"
              >
              <span >{{ second.meta.title }}</span>
              </el-menu-item
            >

            <el-submenu
              :index="second.path"
              v-if="second.children"
              v-for="(second, i) in first.children"
            >
                <template slot="title"
                  ><i class="el-icon-message"></i
                  >{{ second.meta.title }}</template
                >
                <div v-if="second.children">
                  <el-menu-item
                    :index="first.path + '/'+ second.path + '/' + third.path"
                    v-for="(third, j) in second.children"
                    >{{ third.meta.title }}</el-menu-item
                  >
                </div>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-footer> </el-footer>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'home-main',
  data() {
    return {
      // tableData: Array(20).fill(item)
    }
  },
  computed: {
    ...mapGetters(['router'])
  }
}
</script>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-menu {
    height: 100%;
  }

  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
}
</style>
