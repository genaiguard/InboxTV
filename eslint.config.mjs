import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: [
      // Build output
      ".next/**",
      "out/**",
      // Node modules
      "node_modules/**",
      // Public assets
      "public/**",
      // Next.js config
      "next.config.ts",
      "next.config.js",
      // TypeScript declaration files
      "*.d.ts"
    ]
  },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      'react/no-unescaped-entities': 'off'
    }
  }
];
