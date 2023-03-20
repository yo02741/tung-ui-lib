import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host:'0.0.0.0',
    port: 5678,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.js'),
      name: 'YoUILibrary',
      fileName: 'yo-ui-library',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    css: {
      include: [
        'src/assets/all.scss',
      ],
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "src/assets/all.scss";
          `
        }
      }
    }
  },
})
