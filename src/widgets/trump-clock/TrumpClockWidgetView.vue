<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3'
import { useIntervalFn, watchOnce } from '@vueuse/core'
import { ref } from 'vue'
import { NotificationApi } from '@widget-js/core'
import dayjs from 'dayjs'

useWidget()
const hourRef = ref<HTMLImageElement>()
const minuteRef = ref<HTMLImageElement>()
watchOnce(hourRef, () => {
  useIntervalFn(() => {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const hourRotate = (hour % 12) * 30 + minute / 2
    const minuteRotate = minute * 6
    // set the rotation of the hour and minute hands
    hourRef.value?.style.setProperty('--rotate-hour', `${hourRotate}deg`)
    minuteRef.value?.style.setProperty('--rotate-minute', `${minuteRotate}deg`)
  }, 60 * 1000, { immediate: true, immediateCallback: true })
})

function showTime() {
  NotificationApi.info(dayjs().format('HH:mm:ss'))
}
</script>

<template>
  <widget-wrapper>
    <div @click="showTime">
      <img class="bg" src="@/assets/clock_trump_bg.png">
      <img ref="hourRef" class="hour" src="@/assets/clock_trump_hand_hour.png">
      <img ref="minuteRef" class="minute" src="@/assets/clock_trump_hand_minute.png">
    </div>
  </widget-wrapper>
</template>

<style>
img {
  width: var(--widget-inner-width);
  height: var(--widget-inner-height);
  position: absolute;
  user-select: none;
  transition: all 0.5s ease-out;
  -webkit-user-drag: none;
  cursor: pointer;
}

.bg{
  z-index: 1;
}

.hour{
  --rotate-hour: 0deg;
  z-index: 1;
  transform: rotate(var(--rotate-hour));
}

.minute{
  --rotate-minute: 0deg;
  z-index: 2;
  transform: rotate(var(--rotate-minute));
}

.widget-background-mask{
  background-color: transparent;
  box-shadow: none;
  border: none;
}
</style>
