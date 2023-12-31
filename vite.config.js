import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

const __dirname = path.resolve(path.dirname(''))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 路径别名
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  }
})
