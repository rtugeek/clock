import { URL, fileURLToPath } from 'node:url'
import ViteWidget from '@widget-js/vite-plugin-widget'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode == 'offline' ? '' : '/clock/',
  plugins: [
    vue(),
    ViteWidget({ generateFullNamePackage: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
