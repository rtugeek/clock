import { Widget, WidgetKeyword } from '@widget-js/core'

const TrumpClockWidget = new Widget({
  name: 'cn.widgetjs.widgets.clock.trump_clock',
  title: { 'zh-CN': '川普表盘', 'en-US': 'Trump Clock' },
  description: { 'zh-CN': 'China!', 'en-US': 'China!' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: ['fun', 'time'],
  lang: 'zh-CN',
  width: 2,
  height: 2,
  minWidth: 2,
  maxWidth: 2,
  minHeight: 2,
  maxHeight: 2,
  previewImage: '/images/preview_trump.png',
  path: '/widget/trump_clock',
  configPagePath: undefined,
})

export default TrumpClockWidget
