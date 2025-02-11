import type { RouteRecordRaw } from 'vue-router'
import TextClockWidget from './TextClock.widget'

const path = TextClockWidget.path
const name = TextClockWidget.name

const configPagePath = TextClockWidget.configPagePath!.split('?')[0]

const TextClockWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () =>
      import(
        /* webpackChunkName: "cn.widgetjs.widgets.clock.text_clock" */ './TextClockWidgetView.vue'
      ),
  },
  {
    path: configPagePath,
    name: `${name}.config`,
    component: () =>
      import(
        /* webpackChunkName: "cn.widgetjs.widgets.clock.text_clock.config" */ './TextClockConfigView.vue'
      ),
  },
]

export default TextClockWidgetRoutes
