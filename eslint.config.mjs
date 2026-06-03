import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
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
