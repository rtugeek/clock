import './assets/main.css'
import '@widget-js/vue3/dist/style.css'
import { createApp } from 'vue'
import { WidgetJsPlugin } from '@widget-js/vue3'
import App from './App.vue'
import router from './router'
import 'virtual:uno.css'
import i18n from '@/i18n'

const app = createApp(App)

app.use(router)
app.use(WidgetJsPlugin)
app.use(i18n)

app.mount('#app')
