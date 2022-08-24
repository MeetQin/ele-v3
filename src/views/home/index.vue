<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <YnAside />
      </el-aside>
      <el-container>
        <el-header>
          <YnHeader>Header</YnHeader>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import YnMain from "./modules/YnMain.vue";
import YnHeader from "./modules/YnHeader.vue";
import YnAside from "./modules/YnAside.vue";
</script>

<style lang="less" scoped>
.common-layout,
:deep(.el-container) {
  width: 100%;
  height: 100vh;
}

main {
  background: pink;
}
</style>
