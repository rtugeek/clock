import { URL, fileURLToPath } from 'node:url'
import widget from '@widget-js/vite-plugin-widget'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const config: UserConfig = {
    base: env.mode == 'offline' ? '' : '/clock/',
    plugins: [
      vue(),
      widget({ generateFullNamePackage: true })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
  return config
})
