import { LABELS } from '@/i18n/labels'
import { DEFAULT_LOCALE, LOCALES, ui, type Locale } from '@/i18n/ui'

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')
  if (lang && lang in ui) {
    return lang as Locale
  } else {
    return DEFAULT_LOCALE
  }
}

export const useTranslations = (lang: Locale) => {
  return (key: keyof typeof LABELS) => {
    return ui[lang][key] || ui[DEFAULT_LOCALE][key]
  }
}

export { LABELS, LOCALES }
