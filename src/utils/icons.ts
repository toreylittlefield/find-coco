import AstroIcon from '@/assets/icons/astro.svg?raw'
import EnglishIcon from '@/assets/icons/english.svg?raw'
import IndonesiaFlagIcon from '@/assets/icons/indonesia-flag.svg?raw'
import MessengerIcon from '@/assets/icons/messenger.svg?raw'
import WhatsAppIcon from '@/assets/icons/whatsapp.svg?raw'

export const ICONS_MAP = {
  astro: AstroIcon,
  english: EnglishIcon,
  indonesia: IndonesiaFlagIcon,
  messenger: MessengerIcon,
  whatsapp: WhatsAppIcon,
} as const

export type IconName = keyof typeof ICONS_MAP
