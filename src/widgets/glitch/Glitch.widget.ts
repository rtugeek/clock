import { Widget, WidgetKeyword } from '@widget-js/core'
//组件标题
const title = { 'zh-CN': '故障时钟' }
//组件描述
const description = { 'zh-CN': 'Glitch' }
const GlitchWidgetDefine = new Widget({
  name: 'cn.widgetjs.widgets.clock.glitch',
  title: title,
  description: description,
  keywords: [WidgetKeyword.RECOMMEND],
  lang: 'zh-CN',
  width: 4,
  height: 2,
  minWidth: 4,
  maxWidth: 4,
  minHeight: 2,
  maxHeight: 2,
  previewImage: '/images/preview_glitch_clock.png',
  path:'/widget/glitch'
})
console.log(JSON.stringify(GlitchWidgetDefine,null,2))
console.log(GlitchWidgetDefine.path)
export default GlitchWidgetDefine
