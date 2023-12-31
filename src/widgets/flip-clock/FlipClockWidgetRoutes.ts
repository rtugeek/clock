import type { RouteRecordRaw } from 'vue-router'
import FlipClockWidgetDefine from './FlipClock.widget'

const path = FlipClockWidgetDefine.path
const name = FlipClockWidgetDefine.name

const FlipClockWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () =>
      import(
        /* webpackChunkName: "cn.widgetjs.widgets.flip_clock" */ './FlipClockWidgetView.vue'
      ),
  },
]

export default FlipClockWidgetRoutes
