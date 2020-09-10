<template>
  <div class="page">
    <!-- 不存在子路由数组 -->
    <el-menu-item :index="row.path" v-if="!row.children">
      <span>{{row.meta.title}}</span>
    </el-menu-item>

    <!-- 存在子路由数组 -->
    <template v-else>
      <el-submenu :index="row.path">
        <template slot="title">
          <i class="el-icon-message"></i>
          {{ row.meta.title }}
        </template>

        <template>
          <sideTabBar v-for="(item, j) in row.children" :row="item" :key="j"></sideTabBar>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "sideTabBar",
  data() {
    return {};
  },
  props: {
    row: {
      default: () => {
        return {};
      },
      type: Object
    }
  }
};
</script>
<style lang="less" scoped>
.page {
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

