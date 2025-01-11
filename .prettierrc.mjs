/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-organize-imports',
    // must come last https://github.com/tailwindlabs/prettier-plugin-tailwindcss
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindConfig: './tailwind.config.mjs',
  organizeImportsSkipDestructiveCodeActions: true,
  // https://prettier.io/docs/en/options.html
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
}
