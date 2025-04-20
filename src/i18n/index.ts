import { createI18n } from 'vue-i18n'
import en from './en.json'
import zh from './zh.json'

const i18n = createI18n({
  locale: 'zh', // 默认语言
  fallbackLocale: 'en', // 回退语言
  messages: {
    en,
    zh
  }
})

export default i18n
