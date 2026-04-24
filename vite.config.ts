import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData(source: string, fp: string) {
          if (fp.endsWith('styles.scss')) return source
          return `@use "@/assets/styles/variables" as *;\n${source}`
        }
      }
    }
  }
})
