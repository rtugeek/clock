import type { RouteRecordRaw } from 'vue-router'
import ClockWidgetRoutes from '@/widgets/clock/ClockWidgetRoutes'
import GlitchWidgetRoutes from '@/widgets/glitch/GlitchWidgetRoutes'
import FlipClockWidgetRoutes from '@/widgets/flip-clock/FlipClockWidgetRoutes'
import MickeyClockWidgetRoutes from '@/widgets/mickey-clock/MickeyClockWidgetRoutes'

// FBI WANING! IMPORT PLACE, DONT DELETE THIS LINE

const WidgetRouter: RouteRecordRaw[] = [
  ...ClockWidgetRoutes,
  ...GlitchWidgetRoutes,
  ...FlipClockWidgetRoutes,
  ...MickeyClockWidgetRoutes
  // FBI WANING! ROUTE PLACE, DONT DELETE THIS LINE
]
export default WidgetRouter
