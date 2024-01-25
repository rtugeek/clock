<script lang="ts" setup>
import { WidgetWrapper } from '@widget-js/vue3'
import MickeyClockWidget from './MickeyClockWidget.vue'
</script>

<template>
  <WidgetWrapper>
    <MickeyClockWidget
      :border-radius="22"
    />
  </WidgetWrapper>
</template>

<style scoped>
</style>
