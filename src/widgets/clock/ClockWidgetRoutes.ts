import type { RouteRecordRaw } from 'vue-router'
import ClockWidgetDefine from '@/widgets/clock/ClockWidget.widget'

const path = ClockWidgetDefine.configPagePath!.split('?')[0]
const ClockWidgetRoutes: RouteRecordRaw[] = [
  {
    path: ClockWidgetDefine.path,
    name: `${ClockWidgetDefine.name}`,
    component: () =>
      import(/* webpackChunkName: "cn.widgetjs.widgets.clock" */ './ClockWidgetView.vue')
  },
  {
    path,
    name: `${ClockWidgetDefine.name}.config`,
    component: () =>
      import(
        /* webpackChunkName: "cn.widgetjs.widgets.clock.config" */ './ClockWidgetConfigView.vue'
      )
  }
]
export default ClockWidgetRoutes
