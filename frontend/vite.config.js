import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Change this to change your dev server port (you'll need to change it in the backend/config.json > frontend_address)
    https: {
      key: fs.readFileSync('.certs/key.pem'),
      cert: fs.readFileSync('.certs/cert.pem'),
    },
  },
  plugins: [vue()],
  build: {
  //   outDir : './docs' // If you select 'docs' in Github Pages
  //   outDir : '../'    // If you select '/ (root)' in Github Pages
  }
})
