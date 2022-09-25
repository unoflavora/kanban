import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@Modules": path.resolve(__dirname, "src/components/modules"),
      "@Interactables": path.resolve(__dirname, "src/components/Interactables"),
      "@types": path.resolve(__dirname, "src/@types")
    }
  }
})
