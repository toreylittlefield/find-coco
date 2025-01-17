// enum like object where keys are uppercase strings and values are those same strings

export const LABELS = {
  CONTACT: 'CONTACT',
  HOME: 'HOME',
  I_AM_COCO: 'I_AM_COCO',
  PLEASE_CALL_OR_MESSAGE: 'PLEASE_CALL_OR_MESSAGE',
  SITE_TITLE: 'SITE_TITLE',
} as const satisfies Record<Uppercase<string>, Uppercase<string>>
