// modify Astro.currentLocale to be our Locale type
import { AstroGlobal } from 'astro'

declare module 'astro' {
  interface AstroGlobal {
    currentLocale: 'en' | 'id'
  }
}
