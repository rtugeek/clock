import { useWidgetStorage } from '@widget-js/vue3'
import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'
import type { RemovableRef } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import timezoneData from '@/i18n/timezone.json'

dayjs.extend(utc)
dayjs.extend(timezone)
export interface UseWidgetTimeZoneReturn {
  timezone: RemovableRef<string>
  timezoneRegion: ComputedRef<string>
  timezoneLabel: ComputedRef<string>
  region: Ref<string>
  regions: ComputedRef<{ value: string, label: string }[]>
  regionTimezones: ComputedRef<RegionTimeZone[]>
  getNow: () => dayjs.Dayjs
}

export interface RegionTimeZone {
  value: string
  label: string
}
export function useWidgetTimeZone(): UseWidgetTimeZoneReturn {
  const { locale } = useI18n()

  const timezone = useWidgetStorage('timezone', 'Asia/Shanghai')
  const currentLocale = computed(() => locale.value == 'zh' ? 'zh' : 'en')
  const timezoneLabel = computed(() => {
    const value = timezoneData.flatMap(it => it.timezones)
      .find(it => it.value === timezone.value)?.label[currentLocale.value]
    return value || '上海'
  })

  const timezoneRegion = computed(() => {
    const strings = timezone.value.split('/')
    return strings[0]
  })

  const regions = computed<{ value: string, label: string }[]>(() => {
    return timezoneData.map(region => ({
      value: region.region,
      label: region.regionName[currentLocale.value]
    }))
  })

  const region = ref(timezone.value.split('/')[0])
  const regionTimezones = computed<RegionTimeZone[]>(() => {
    const timezones = timezoneData.find(item => item.region === region.value)?.timezones || []
    return timezones.map((timezone) => {
      return {
        value: timezone.value,
        label: timezone.label[currentLocale.value],
      }
    })
  })

  function getNow() {
    return dayjs().tz(timezone.value)
  }

  return {
    timezone,
    timezoneRegion,
    timezoneLabel,
    regions,
    region,
    regionTimezones,
    getNow
  }
}
