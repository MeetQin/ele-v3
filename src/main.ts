import { createApp } from "vue";
import { createPinia } from "pinia";
import icon from "@/plugin/icon";
import App from "./App.vue";
import router from "./router";

import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(icon);

app.mount("#app");
