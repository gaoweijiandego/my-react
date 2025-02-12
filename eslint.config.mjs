import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ...compat.extends("next/core-web-vitals")[0],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: ['@next/next'],
    settings: {
      react: {
        version: 'detect'
      },
    },
    extends: [
      'plugin:@next/next/recommended',
      'next/core-web-vitals'
    ],
  },
];

export default eslintConfig;
