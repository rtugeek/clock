import './assets/main.css'
import '@widget-js/vue3/dist/style.css'
import '@widget-js/vue3/dist/mingcute_icon/MingCute.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { WidgetJsPlugin } from '@widget-js/vue3'

const app = createApp(App)

app.use(router)
app.use(WidgetJsPlugin)

app.mount('#app')
