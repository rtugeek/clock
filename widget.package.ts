import { WidgetPackage } from '@widget-js/core'

export default new WidgetPackage({
  remote: {
    entry: 'https://rtugeek.gitee.io/clock',
    hash: true,
    base: '/clock',
  },
  remoteEntry: 'https://rtugeek.gitee.io/clock',
  remotePackage: 'https://rtugeek.gitee.io/clock/widget.json',
  name: 'cn.widgetjs.widgets.clock',
  author: 'Neo Fu',
  homepage: 'https://widgetjs.cn',
  description: {
    'zh-CN': '时钟组件',
  },
  entry: 'index.html',
  title: { 'zh-CN': '时钟组件合辑' },
  version: '0.0.2',
  hash: true,
  devOptions: {
    folder: './src/widgets/',
    route: true,
    devUrl: 'http://localhost:5173/clock',
  },
  widgets: [],
  permissions: [],
})
