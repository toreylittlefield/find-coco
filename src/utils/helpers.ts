import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const typeSafeObjectEntries = <T extends Record<string, unknown>>(
  obj: T,
) => {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
