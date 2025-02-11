import { Widget, WidgetKeyword } from '@widget-js/core'

const name = 'cn.widgetjs.widgets.flip_clock'
const FlipClockWidgetDefine = new Widget({
  name,
  title: { 'zh-CN': '翻页时钟', 'en-US': 'Flip Clock' },
  description: { 'zh-CN': '带有翻页动画的数字时钟', 'en-US': 'Clock with flip animation' },
  keywords: [WidgetKeyword.RECOMMEND],
  lang: 'zh-CN',
  backgroundThrottling: false,
  width: 4,
  height: 2,
  minWidth: 4,
  maxWidth: 4,
  minHeight: 2,
  categories: ['time'],
  maxHeight: 2,
  socialLinks: [
    { name: 'github', link: 'https://github.com/rtugeek/clock' }
  ],
  previewImage: '/images/preview_flip_clock.png',
  path: '/widget/flip_clock',
})

export default FlipClockWidgetDefine
