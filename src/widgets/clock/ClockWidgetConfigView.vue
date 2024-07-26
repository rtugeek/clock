<script lang='ts' setup>
import { WidgetConfigOption, WidgetEditDialog, useWidgetParams } from '@widget-js/vue3'
import { BrowserWindowApi } from '@widget-js/core'
import 'element-plus/dist/index.css'

BrowserWindowApi.setSize(600, 350)
BrowserWindowApi.center()

const widgetParams = useWidgetParams()

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
    :widget-params="widgetParams"
    :option="widgetConfigOption"
  />
</template>

<style scoped lang='scss'></style>
