<script lang='ts' setup>
import { computed, ref } from 'vue'
import { useInterval, useWindowSize } from '@vueuse/core'
import { useWidgetStorage, useWidgetTheme } from '@widget-js/vue3'
import { useWidgetTimeZone } from '@/composition/useWidgetTimeZone'

const secondDeg = ref(0)
const hourDeg = ref(0)
const minuteDeg = ref(0)
const { timezoneLabel, getNow } = useWidgetTimeZone()
const showTimezone = useWidgetStorage('show-timezone', false)

useWidgetTheme()

function calAddDeg(current: number, max: number, previousDeg: number, deg: number) {
  if (current == 0) {
    current = max
  }
  const previous = previousDeg / deg
  if (previous == current) {
    return 0
  }
  const addDeg = (current - previous % max) * deg
  return addDeg % 360
}

function getHour() {
  const hour = getNow().hour()
  return hour > 12 ? hour - 12 : hour
}

function updateTime() {
  const second = getNow().second()
  const minute = getNow().minute()
  secondDeg.value = secondDeg.value + calAddDeg(second, 60, secondDeg.value, 6)
  minuteDeg.value = (minute / 60 * 360)
  hourDeg.value = (getHour() / 12 * 360) + (minute / 60 * 30)
}

useInterval(1000, {
  callback: () => {
    updateTime()
  }
})

const windowSize = useWindowSize()
const fillClass = computed(() => {
  if (windowSize.width.value > windowSize.height.value) {
    return { 'fill-height': true, 'fill-width': false }
  }
  return { 'fill-height': false, 'fill-width': true }
})
</script>

<template>
  <widget-wrapper>
    <div
      class="clock-container"
    >
      <div class="circles" :class="{ ...fillClass }">
        <div class="center white-bg" />
        <img class="center" src="./images/clock_bg.png" alt="">
        <div v-if="showTimezone" class="timezone">
          {{ timezoneLabel }}
        </div>
        <img
          class="center hour tick" :style="{
            transform: `rotate(${hourDeg}deg)`,
          }" src="./images/clock_hand_hour.png" alt=""
        >
        <img
          class="center minute tick" :style="{
            transform: `rotate(${minuteDeg}deg)`,
          }" src="./images/clock_hand_minute.png" alt=""
        >
        <img
          class="center second" :style="{
            transform: `rotate(${secondDeg}deg)`,
          }" src="./images/clock_hand_second.png" alt=""
        >
      </div>
    </div>
  </widget-wrapper>
</template>

<style lang='scss' scoped>
//背景设置为透明，并隐藏滚动条
body * {
  background: transparent;
  overflow: hidden;
  user-select: none;
}

.clock-container {
  overflow: hidden;
  position: relative;
  background-color: var(--widget-background-color);
  border-radius: var(--widget-border-radius, 22px);
  width: 100%;
  height: 100%;

  img {
    transform: scale(0.9);
    pointer-events: none;
  }

  .circles.fill-width > *:not(.timezone) {
    width: 100%;
    aspect-ratio: 1;
  }

  .circles.fill-height > *:not(.timezone) {
    height: 100%;
    aspect-ratio: 1;
  }

  .center {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
  }

  .timezone {
    font-weight: bold;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.8rem;
    text-align: center;
    color: #5b5b5b;
    padding: 2px;
    border-radius: 4px;
    background-color: #f4f4f4;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .tick {
    transition-duration: 1s;
    transition-property: transform;
    transition-timing-function: ease-out;
  }

  .second {
    transition-duration: 0s;
    transition-timing-function: linear;
  }

  .white-bg {
    background-color: rgba(255, 255, 255);
    background-position: center;
    border-radius: 50%;
    transform: scale(0.9);
  }

}
</style>
