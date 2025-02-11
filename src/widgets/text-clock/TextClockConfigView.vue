<script lang="ts" setup>
import { WidgetConfigOption, useWidget } from '@widget-js/vue3'

const { widgetParams } = useWidget()

const widgetConfigOption = new WidgetConfigOption({
  custom: false,
  theme: {
    backgroundColor: true,
    borderRadius: true,
    fontSize: [12, 30],
    color: true,
  },
})
</script>

<template>
  <widget-edit-dialog
    :widget-params="widgetParams"
    :option="widgetConfigOption"
  />
</template>

<style scoped></style>
