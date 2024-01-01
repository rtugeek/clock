<script lang='ts' setup>
import { useWidget } from '@widget-js/vue3'
import { WidgetData } from '@widget-js/core'

const {
  widgetData,
  widgetParams,
  save
} = useWidget(WidgetData)

// 修改成需要设置组件参数配置
const widgetConfigOption = {
  custom: false,
  theme: {
    backgroundColor: true,
    borderRadius: true
  }
}
</script>

<template>
  <widget-edit-dialog
    v-model='widgetData' :widget-params='widgetParams'
    :option='widgetConfigOption'
    @apply='save'
    @confirm='save({ closeWindow: true })'
  />
</template>

<style scoped lang='scss'>
</style>
