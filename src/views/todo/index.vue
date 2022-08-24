<template>
  <div class="warp">
    <el-row justify="start">
      <el-col :span="5">
        <el-input v-model="item"></el-input>
      </el-col>
      <el-col
        :span="1"
        :style="{
          'margin-left': '10px',
        }"
      >
        <el-button type="primary" @click="todo.add">add</el-button>
      </el-col>
    </el-row>

    <ul v-for="item in itemList" :key="item.id">
      <li>
        {{ item.content }}
        <el-button type="primary" @click="todo.remove(item)">删除</el-button>
      </li>
    </ul>
    <img :src="img" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
const img = ref<string>("");
onMounted(async () => {
  // Glob导入
  img.value = (await import("@/assets/image/img.png")).default;
  console.log(img);

  // 动态导入
  const image = import.meta.glob("@/assets/image/img.png");
  for (const path in image) {
    image[path]().then((res) => {
      console.log(path, res);
    });
  }

  const worker = new Worker(new URL(img.value, import.meta.url));
  console.log(worker, "worker");
});

// 从pinia中结构出来也可以去进行响应式的更新
const { item, itemList } = storeToRefs(useTodoStore());

const todo = useTodoStore();
console.log(import.meta.env.VITE_BASE_API_URL);
</script>

<style scoped>
/* 样式穿透 */
/* :deep(.el-input) {
  width: 500px;
} */
</style>
