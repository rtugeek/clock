<script lang='ts' setup>
import { WidgetConfigOption, WidgetEditDialog, useWidgetParams, useWidgetStorage } from '@widget-js/vue3'
import { useI18n } from 'vue-i18n'

import { useWidgetTimeZone } from '@/composition/useWidgetTimeZone'

const { t } = useI18n()

const widgetParams = useWidgetParams()
const showTimezone = useWidgetStorage('show-timezone', true)
const { timezone, regions, region, regionTimezones } = useWidgetTimeZone()

const widgetConfigOption = new WidgetConfigOption({
  custom: true,
  theme: {
    backgroundColor: true,
    borderRadius: true
  }
})
</script>

<template>
  <WidgetEditDialog
    :widget-params="widgetParams"
    :option="widgetConfigOption"
  >
    <template #custom>
      <el-form-item :label="t('labels.selectTimezone')">
        <div class="flex gap-2">
          <el-select v-model="region" style="width: 150px;" :placeholder="t('placeholders.selectContinent')">
            <el-option
              v-for="continent in regions"
              :key="continent.value"
              :label="continent.label"
              :value="continent.value"
            />
          </el-select>
          <el-select v-model="timezone" class="flex-1" filterable :placeholder="t('placeholders.selectTimezone')">
            <el-option
              v-for="tz in regionTimezones"
              :key="tz.value"
              :label="tz.label"
              :value="tz.value"
            />
          </el-select>
        </div>
      </el-form-item>
      <el-form-item :label="t('labels.showTimezone')">
        <el-switch v-model="showTimezone" />
      </el-form-item>
    </template>
  </WidgetEditDialog>
</template>

<style scoped lang='scss'></style>
