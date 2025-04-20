<script setup lang="ts">
import { useAppLanguage } from '@widget-js/vue3'

useAppLanguage({
  onLoad: (code: string) => {

  },
  onChange: (code: string) => {},
})
</script>

<template>
  <router-view />
</template>

<style lang="scss">
</style>
