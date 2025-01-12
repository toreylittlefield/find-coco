import type { LABELS } from './labels'

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string
    lang: string
    dir: 'rtl' | 'ltr'
  }
}

export type Locale = keyof typeof LOCALES

export const LOCALES = {
  en: {
    label: 'English',
    lang: 'en',
    dir: 'ltr',
  },
  id: {
    label: 'Bahasa Indonesia',
    lang: 'id',
    dir: 'ltr',
  },
} as const satisfies LocaleSetting

export const DEFAULT_LOCALE = 'en' as const satisfies Locale

type UIRecord = Record<keyof typeof LABELS, string>

export const ui = {
  en: {
    CONTACT: 'Contact',
    HOME: 'Home',
    I_AM_COCO: 'I am Coco',
    PLEASE_CALL_OR_MESSAGE: 'Please call or message',
    SITE_TITLE: 'Coco',
  },
  id: {
    HOME: 'Beranda',
    CONTACT: 'Kontak',
    I_AM_COCO: 'Saya Coco',
    PLEASE_CALL_OR_MESSAGE: 'Silakan hubungi atau pesan',
    SITE_TITLE: 'Coco',
  },
} as const satisfies Record<Locale, UIRecord>
