import { Widget, WidgetKeyword } from '@widget-js/core'

const name = 'cn.widgetjs.widgets.clock.default'
// 组件关键词
const keywords = [WidgetKeyword.RECOMMEND]
const ClockWidgetDefine = new Widget({
  path: '/widget/clock',
  configPagePath: '/widget/config/clock?frame=true&transparent=false&width=500&height=500',
  name,
  title: { 'zh-CN': '时钟', 'en-US': 'Clock' },
  description: { 'zh-CN': '带动画的时钟', 'en-US': 'Clock with animation' },
  keywords,
  backgroundThrottling: false,
  categories: ['time'],
  lang: 'zh-CN',
  width: 2,
  height: 2,
  minWidth: 2,
  maxWidth: 4,
  minHeight: 2,
  maxHeight: 4,
  previewImage: '/images/preview_clock.png',
  socialLinks: [
    { name: 'github', link: 'https://github.com/rtugeek/clock' }
  ],
  browserWindowOptions: {
    backgroundThrottling: false,
  }
})
export default ClockWidgetDefine
