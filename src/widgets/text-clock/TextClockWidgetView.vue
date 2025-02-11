<template>
  <widget-wrapper>
    <span>Hello World!</span>
  </widget-wrapper>
</template>

<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3';

const { widgetParams } = useWidget();
</script>

<style scoped></style>
