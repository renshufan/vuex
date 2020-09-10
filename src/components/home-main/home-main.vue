<template>
  <div class="page">
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="[]" unique-opened router>
          <!-- 左侧菜单栏 -->
          <sideTabBar v-for="(item, index) in router" :key="index" :row="item"></sideTabBar>
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
        <el-footer></el-footer>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import sideTabBar from "./sideTabBar";
export default {
  name: "home-main",
  data() {
    return {
      // tableData: Array(20).fill(item)
    };
  },
  components: {
    sideTabBar
  },
  computed: {
    ...mapGetters(["router"])
  }
};
</script>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-menu {
  }
}
</style>
