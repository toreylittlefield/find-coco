export const typeSafeObjectEntries = <T extends Record<string, unknown>>(
  obj: T,
) => {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>
}
