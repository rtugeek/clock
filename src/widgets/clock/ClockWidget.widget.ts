import { Widget, WidgetKeyword } from '@widget-js/core'

const name = 'cn.widgetjs.widgets.clock.default'
// 组件标题
const title = { 'zh-CN': '时钟' }
// 组件描述
const description = { 'zh-CN': '带动画的时钟' }
// 组件关键词
const keywords = [WidgetKeyword.RECOMMEND]
const ClockWidgetDefine = new Widget({
  path: '/widget/clock',
  configPagePath: '/widget/config/clock',
  name,
  title,
  description,
  keywords,
  backgroundThrottling: false,
  lang: 'zh-CN',
  width: 2,
  height: 2,
  minWidth: 2,
  maxWidth: 4,
  minHeight: 2,
  maxHeight: 4,
  previewImage: '/images/preview_clock.png'
})
export default ClockWidgetDefine
