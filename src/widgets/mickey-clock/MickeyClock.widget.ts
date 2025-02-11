import {
  Widget,
  WidgetKeyword,
} from '@widget-js/core'

// 组件关键词
const keywords = [WidgetKeyword.RECOMMEND]
// 组件路由地址
const url = '/widget/mickey_clock'
// 组件关键词
const MickeyClockWidgetDefine = new Widget({
  name: 'cn.widgetjs.widgets.clock.mickey_clock',
  title: { 'zh-CN': '米奇表盘', 'en-US': 'Mickey Clock' },
  description: { 'zh-CN': '复古米老鼠表盘', 'en-US': 'Retro Mickey Mouse watch dial' },
  keywords,
  categories: ['time'],
  lang: 'zh-CN',
  width: 2,
  height: 2,
  minWidth: 2,
  maxWidth: 3,
  minHeight: 2,
  maxHeight: 3,
  previewImage: '/images/preview_micky_clock.png',
  path: url,
  socialLinks: [
    { name: 'github', link: 'https://github.com/rtugeek/clock' }
  ]
})

export default MickeyClockWidgetDefine
