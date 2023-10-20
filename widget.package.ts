import { WidgetPackage } from '@widget-js/core'

export default new WidgetPackage({
  name: 'cn.widgetjs.widgets.clock',
  author: 'Neo Fu',
  homepage: 'https://widgetjs.cn',
  description: {
    'zh-CN': '时钟组件'
  },
  entry: 'index.html',
  title: { 'zh-CN': '时钟组件合辑' },
  version: '0.0.1',
  hash: true,
  devOptions: {
    folder: './src/widgets/',
    route: true,
    devUrl: 'http://localhost:5175'
  },
  widgets: [],
  permissions: []
})
