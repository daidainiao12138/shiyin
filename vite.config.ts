import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 关键：打包资源使用相对路径
  build: {
    rollupOptions: {
      input: 'index.html' // 相对于项目根目录
    }
  }
})
