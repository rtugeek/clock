import './assets/main.css'
import '@widget-js/vue3/dist/style.css'
import { createApp } from 'vue'
import { WidgetJsPlugin } from '@widget-js/vue3'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(WidgetJsPlugin)

app.mount('#app')
