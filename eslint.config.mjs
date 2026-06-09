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
        clearInterval: "readonly",
        document: "readonly",
        HTMLElement: "readonly",
        IntersectionObserver: "readonly",
        ResizeObserver: "readonly",
        setInterval: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
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
