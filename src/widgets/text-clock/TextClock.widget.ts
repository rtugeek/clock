import { Widget, WidgetKeyword } from '@widget-js/core'

const TextClockWidget = new Widget({
  name: 'cn.widgetjs.widgets.clock.text_clock',
  title: { 'zh-CN': '文本时钟', 'en-US': 'Text Clock' },
  description: { 'zh-CN': '简单的文本时钟', 'en-US': 'Simple Text Clock' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: [],
  lang: 'zh-CN',
  width: 4,
  height: 2,
  minWidth: 4,
  maxWidth: 4,
  minHeight: 2,
  maxHeight: 2,
  previewImage: '/images/preview_text_clock.png',
  path: '/widget/text_clock',
  configPagePath:
    '/widget/config/text_clock?width=600&height=500&frame=true&transparent=false',
})

export default TextClockWidget
