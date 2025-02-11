<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3'
import { useDateFormat, useNow } from '@vueuse/core'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import weekday from 'dayjs/plugin/weekday'
import { Lunar } from 'lunar-typescript'
import { ref } from 'vue'

dayjs.extend(weekday)
useWidget()
const time = useDateFormat(useNow(), 'HH:mm')
const date = ref('')
const weekdayStr = ref('')
const lunar = ref(Lunar.fromDate(new Date()))
function update() {
  date.value = dayjs().format('MM月DD日')
  weekdayStr.value = dayjs().locale('zh-cn').format('dddd')
  lunar.value = Lunar.fromDate(new Date())
}

update()
</script>

<template>
  <widget-wrapper>
    <div class="content">
      <div class="time">
        {{ time }}
      </div>
      <div class="text-center flex gap-2 w-full justify-center">
        <div>{{ date }}</div>
        <div>{{ weekdayStr }} </div>
        <div>{{ lunar.toString().split('年')[1] }}</div>
      </div>
    </div>
  </widget-wrapper>
</template>

<style scoped lang='scss'>
@import url('@/assets/font/firacode.css');
.content{
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  color: var(--widget-color);
  .time{
    font-size: calc(5 * var(--widget-font-size));
    font-family: 'FiraCode', sans-serif;
  }
}
</style>
