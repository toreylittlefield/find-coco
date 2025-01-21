interface ImportMetaEnv {
  readonly PUBLIC_FB_MESSENGER_URL: string
  readonly PUBLIC_GTAG: string
  readonly PUBLIC_META_PIXEL: string
  readonly PUBLIC_WHATSAPP_PHONE_NUMBER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
