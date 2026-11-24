import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

/**
 * eslint-config-next v16 ships flat configs, so they're imported directly.
 * (The previous FlatCompat wrapper crashed with a circular-structure error.)
 */
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...typescriptConfig,
];

export default eslintConfig;
