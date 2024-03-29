import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    ignores: [
      '.DS_Store',
      '**/.DS_Store/**',
      'node_modules',
      '**/node_modules/**',
      'build',
      'build/**',
      '.svelte-kit',
      '.svelte-kit/**',
      'package',
      'package/**',
      '.env',
      '**/.env/**',
      '.env.*',
      '**/.env.*/**',
      '!.env.example',
      '!**/.env.example/**',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml/**',
      'package-lock.json',
      '**/package-lock.json/**',
      'yarn.lock',
      '**/yarn.lock/**',
    ],

    stylistic: {
      indent: 2,
    },

    svelte: true,
  },
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/migration-from-tailwind-2': 'off',
    },
  }),
)
