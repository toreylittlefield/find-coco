import { type IconName } from '@/utils/icons'
import type { LABELS } from './labels'

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string
    lang: string
    dir: 'rtl' | 'ltr'
    iconName: IconName
  }
}

export type Locale = keyof typeof LOCALES

export const LOCALES = {
  en: {
    label: 'English',
    lang: 'en',
    dir: 'ltr',
    iconName: 'english',
  },
  id: {
    label: 'Bahasa Indonesia',
    lang: 'id',
    dir: 'ltr',
    iconName: 'indonesia',
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
    SITE_DESCRIPTION:
      'Lost Bali Dog in Ubud area. Female named Coco, light brown/greyish black brindle, missing since Nov 28. Last seen at Sayan, Kutuh Rice Field. Reward offered.',
    SITE_TITLE: 'Coco',
    SITE_NAME: 'Coco',
  },
  id: {
    HOME: 'Beranda',
    CONTACT: 'Kontak',
    I_AM_COCO: 'Saya Coco',
    PLEASE_CALL_OR_MESSAGE: 'Silakan hubungi atau pesan',
    SITE_DESCRIPTION:
      'Anjing hilang di Bali, daerah Ubud. Betina bernama Coco, belang coklat muda/abu-abu gelap, hilang sejak 28 Nov. Terakhir terlihat di Sayan, Sawah Kutuh. Hadiah ditawarkan.',
    SITE_TITLE: 'Coco',
    SITE_NAME: 'Coco',
  },
} as const satisfies Record<Locale, UIRecord>
