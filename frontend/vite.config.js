import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
  //   outDir : './docs' // If you select 'docs' in Github Pages
  //   outDir : '../'    // If you select '/ (root)' in Github Pages
  }
})
