import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import WidgetRouter from '@/widgets/widget-router'

/**
 * 组件路由都以 /widget/开头，e.g. /widget/countdown
 * 组件设置路由都以 /widget/config/开头，e.g. /widget/config/countdown
 * webpackChunkName: 和路由名称保持一致
 */
const routes: RouteRecordRaw[] = [
  ...WidgetRouter,
  {
    path: '/',
    component: () => import('@/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
