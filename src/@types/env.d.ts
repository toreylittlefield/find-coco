interface ImportMetaEnv {
  readonly PUBLIC_WHATSAPP_PHONE_NUMBER: string
  readonly PUBLIC_FB_MESSENGER_URL: string
  readonly PUBLIC_GTAG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
