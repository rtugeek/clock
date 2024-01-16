<script lang="ts" setup>
import { WidgetConfigOption, WidgetEditDialog, useWidget } from '@widget-js/vue3'
import { BrowserWindowApi, WidgetData, WidgetDataApi } from '@widget-js/core'
import { reactive } from 'vue'
import 'element-plus/dist/index.css'

BrowserWindowApi.setSize(600, 350)
BrowserWindowApi.center()
const { widgetData, widgetParams } = useWidget(WidgetData)

// 修改成需要设置组件参数配置
const widgetConfigOption = reactive(
  new WidgetConfigOption({
    custom: false,
    backgroundColor: true,
    borderRadius: false,
  }),
)

async function onSaveClick() {
  await WidgetDataApi.save(widgetData.value)
  window.close()
}
async function onApplyClick() {
  await WidgetDataApi.save(widgetData.value)
}
</script>

<template>
  <WidgetEditDialog
    :widget-params="widgetParams"
    :option="widgetConfigOption"
    :widget-data="widgetData"
    @apply="onApplyClick()"
    @confirm="onSaveClick()"
  />
</template>

<style scoped lang="scss"></style>
