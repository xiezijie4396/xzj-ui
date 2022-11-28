import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export const config = {
  plugins: [
    dts({
      outputDir: "./dist/types",
      insertTypesEntry: true, // 插入TS 入口
      copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
    }),
    vue(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  },
  define: {
    "process.env": {}, // 修复vite自身的bug
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
      formats: ["es", "umd", "iife"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    sourcemap: true, // 输出单独 source文件
    outDir: "./dist",
  },
};

export default defineConfig(config);
