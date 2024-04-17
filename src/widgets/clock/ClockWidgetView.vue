<script lang='ts' setup>
import { computed, ref } from 'vue'
import { useInterval, useWindowSize } from '@vueuse/core'
import dayjs from 'dayjs'
import { useWidget } from '@widget-js/vue3'
import { WidgetData } from '@widget-js/core'
import ClockWidgetDefine from '@/widgets/clock/ClockWidget.widget'

const secondDeg = ref(0)
const hourDeg = ref(0)
const minuteDeg = ref(0)

const defaultData = new WidgetData(ClockWidgetDefine.name)
defaultData.theme.backgroundColor = '#000'
useWidget(WidgetData, { defaultData })

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
  const hour = dayjs().hour()
  return hour > 12 ? hour - 12 : hour
}

function updateTime() {
  const now = dayjs()
  const second = now.second()
  const minute = now.minute()
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
  height: 100%;
  position: relative;
  width: 100%;
  background-color: var(--widget-background-color);
  border-radius: var(--widget-border-radius, 22px);

  img {
    transform: scale(0.9);
    pointer-events: none;
  }

  .circles.fill-width > * {
    width: 100%;
    aspect-ratio: 1;
  }

  .circles.fill-height > * {
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
    background-color: white;
    background-position: center;
    border-radius: 50%;
    transform: scale(0.9);
  }

}
</style>
