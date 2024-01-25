<script lang='ts' setup>
import { WidgetConfigOption, WidgetEditDialog, useWidget } from '@widget-js/vue3'
import { BrowserWindowApi, WidgetData } from '@widget-js/core'
import 'element-plus/dist/index.css'
import ClockWidgetDefine from '@/widgets/clock/ClockWidget.widget'

BrowserWindowApi.setSize(600, 350)
BrowserWindowApi.center()

const defaultData = new WidgetData(ClockWidgetDefine.name)
defaultData.theme.backgroundColor = '#000'
const { widgetData, widgetParams, save } = useWidget(WidgetData, { defaultData })

// 修改成需要设置组件参数配置
const widgetConfigOption = new WidgetConfigOption({
  custom: false,
  theme: {
    backgroundColor: true,
    borderRadius: true
  }
})
</script>

<template>
  <WidgetEditDialog
    v-model='widgetData'
    :widget-params='widgetParams'
    :option='widgetConfigOption'
    @apply='save'
    @confirm='save({ closeWindow: true })'
  />
</template>

<style scoped lang='scss'></style>
