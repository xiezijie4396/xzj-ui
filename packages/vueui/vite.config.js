import { defineConfig } from "vite";
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export const config = {
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  define: {
    'process.env': {} // 修复vite自身的bug
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'XiezijieUI',
      // the proper extensions will be added
      fileName: 'xiezijie-ui',
      formats: ['es', 'umd', 'iife']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    sourcemap: true, // 输出单独 source文件
    outDir: './dist'
  }
}

export default defineConfig(config)