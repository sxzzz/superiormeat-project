import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'    // 👈 这里加上这行！

export default defineConfig({
  plugins: [vue()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // 👈 设置 @ 指向 src
    }
  }
})
