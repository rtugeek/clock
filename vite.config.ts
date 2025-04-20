import { URL, fileURLToPath } from 'node:url'
import widget from '@widget-js/vite-plugin-widget'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const config: UserConfig = {
    base: env.mode == 'offline' ? '' : '/clock/',
    plugins: [
      vue(),
      widget({ generateFullNamePackage: true }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      UnoCSS(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
  return config
})
