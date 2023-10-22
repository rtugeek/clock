import { Widget, WidgetKeyword } from '@widget-js/core'

const name = 'cn.widgetjs.widgets.flip_clock'
//组件标题
const title = { 'zh-CN': '翻页时钟' }
//组件描述
const description = { 'zh-CN': '带有翻页动画的数字时钟' }
const FlipClockWidgetDefine = new Widget({
  name: name,
  title: title,
  description: description,
  keywords: [WidgetKeyword.RECOMMEND],
  lang: 'zh-CN',
  backgroundThrottling: false,
  width: 4,
  height: 2,
  minWidth: 4,
  maxWidth: 4,
  minHeight: 2,
  maxHeight: 2,
  previewImage: '/images/preview_flip_clock.png',
  path:'/widget/flip_clock',
})

export default FlipClockWidgetDefine
