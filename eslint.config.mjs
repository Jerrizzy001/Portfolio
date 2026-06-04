import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

const eslintConfig = [
  {
    files: ["**/*.{js,mjs,jsx}"],
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      ".agents/**",
      ".claude/**",
      ".cursor/**",
      ".impeccable/**",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: [
      ".agents/**",
      ".claude/**",
      ".cursor/**",
      ".impeccable/**",
    ],
  },
];

export default eslintConfig;
