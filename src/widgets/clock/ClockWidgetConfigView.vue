<template>
  <widget-edit-dialog
    :widget-params="widgetParams"
    :option="widgetConfigOption"
    :widget-data="widgetData"
    @apply="onApplyClick()"
    @confirm="onSaveClick()"
  >
  </widget-edit-dialog>
</template>

<script lang="ts" setup>
import { useWidget, WidgetConfigOption, WidgetEditDialog } from '@widget-js/vue3'
import { BrowserWindowApi, WidgetData, WidgetDataApi } from '@widget-js/core'
import { reactive } from 'vue'
import 'element-plus/dist/index.css'

BrowserWindowApi.setSize(600, 350)
BrowserWindowApi.center()
const { widgetData, widgetParams } = useWidget(WidgetData)

//修改成需要设置组件参数配置
const widgetConfigOption = reactive(
  new WidgetConfigOption({
    custom: false,
    backgroundColor: true,
    borderRadius: false
  })
)

const onSaveClick = async () => {
  await WidgetDataApi.save( widgetData.value)
  window.close()
}
const onApplyClick = async () => {
  await WidgetDataApi.save(widgetData.value)
}
</script>

<style scoped lang="scss"></style>
