import { ElMessage } from "element-plus";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export type Item = {
  id: number;
  content: string;
};

let id = 0;

const idAdd = () => id++;

export const useTodoStore = defineStore("TODO", () => {
  const item = ref<string>("");
  const itemList = reactive<Item[]>([
    {
      id: idAdd(),
      content: "这是一个测试的",
    },
  ]);

  const add = (): void => {
    if (!item.value) {
      ElMessage.error("请输入内容");
      return;
    }
    itemList.push({
      id: idAdd(),
      content: item.value,
    });

    item.value = "";
  };

  const remove = (item: Item): void => {
    const index = itemList.findIndex((v) => v.id === item.id);
    itemList.splice(index, 1);
  };

  return {
    item,
    itemList,
    add,
    remove,
  };
});
