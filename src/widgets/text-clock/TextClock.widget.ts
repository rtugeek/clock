import { Widget, WidgetKeyword } from '@widget-js/core';
//TODO 修改组件信息，标题，描述，关键词
const TextClockWidget = new Widget({
  name: 'cn.widgetjs.widgets.clock.text_clock',
  title: { 'zh-CN': '文本时钟' },
  description: { 'zh-CN': '' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: [],
  lang: 'zh-CN',
  width: 4,
  height: 2,
  minWidth: 4,
  maxWidth: 4,
  minHeight: 2,
  maxHeight: 2,
  previewImage: '修改为组件预览图地址',
  path: '/widget/text_clock',
  configPagePath:
    '/widget/config/text_clock?width=600&height=500&frame=true&transparent=false',
});

export default TextClockWidget;
