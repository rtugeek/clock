import type { RouteRecordRaw } from 'vue-router'
import TrumpClockWidget from './TrumpClock.widget'

const path = TrumpClockWidget.path
const name = TrumpClockWidget.name

const TrumpClockWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () =>
      import(
        /* webpackChunkName: "cn.widgetjs.widgets.clock.trump_clock" */ './TrumpClockWidgetView.vue'
      ),
  },
]

export default TrumpClockWidgetRoutes
