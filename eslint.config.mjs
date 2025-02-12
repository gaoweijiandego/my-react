import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: true
});

const eslintConfig = [
  {
    ignores: ["**/node_modules/**", ".next/**", "out/**"],
  },
  ...compat.config({
    root: true,
    extends: ["next/core-web-vitals"]
  })
];

export default eslintConfig;
