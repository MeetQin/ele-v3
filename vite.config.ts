import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import compressPlugin from "vite-plugin-compression"; //静态资源压缩
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  console.log(loadEnv(mode, process.cwd()));

  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      compressPlugin({
        verbose: true, // 默认即可
        disable: false, //开启压缩(不禁用)，默认即可
        deleteOriginFile: false, //删除源文件
        threshold: 10240, //压缩前最小文件大小
        algorithm: "gzip", //压缩算法
        ext: ".gz", //文件类型
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      terserOptions: {
        compress: {
          // 清除生产模式的debugger调试
          drop_debugger: true,
          // 清除生产模式的打印
          drop_console: true,
        },
      },
    },
  });
};
