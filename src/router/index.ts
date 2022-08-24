import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes = <RouteRecordRaw[]>[
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    redirect: "/todo",
    children: [
      {
        path: "/todo",
        name: "todo",
        component: () => import("@/views/todo/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
