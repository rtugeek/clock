import { Widget, WidgetKeyword } from '@widget-js/core'

// 组件标题
const title = { 'zh-CN': '故障时钟', 'en-US': 'Glitch Clock' }
// 组件描述
const description = { 'zh-CN': 'Glitch', 'en-US': 'Glitch' }
const GlitchWidgetDefine = new Widget({
  name: 'cn.widgetjs.widgets.clock.glitch',
  title,
  description,
  keywords: [WidgetKeyword.RECOMMEND],
  lang: 'zh-CN',
  width: 4,
  height: 2,
  minWidth: 4,
  categories: ['time'],
  maxWidth: 4,
  minHeight: 2,
  maxHeight: 2,
  previewImage: '/images/preview_glitch_clock.png',
  path: '/widget/glitch'
})
export default GlitchWidgetDefine
