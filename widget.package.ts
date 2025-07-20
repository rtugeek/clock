import { WidgetPackage } from '@widget-js/core'

export default new WidgetPackage({
  remote: {
    entry: 'https://widgetjs.cn/clock',
    hash: true,
    base: '/clock',
    hostname: 'widgetjs.cn'
  },
  remoteEntry: 'https://widgetjs.cn/clock',
  remotePackage: 'https://widgetjs.cn/clock/widget.json',
  name: 'cn.widgetjs.widgets.clock',
  author: 'Neo Fu',
  homepage: 'https://widgetjs.cn',
  description: {
    'zh-CN': '时钟组件',
    'en-US': 'Clock'
  },
  zipUrl: 'https://widgetjs.cn/clock/widget.zip',
  entry: 'index.html',
  title: { 'zh-CN': '时钟组件合辑', 'en-US': 'Clock Widgets' },
  hash: true,
  devOptions: {
    folder: './src/widgets/',
    route: true,
    devUrl: 'http://localhost:5173/clock'
  },
  widgets: [],
  permissions: []
})
