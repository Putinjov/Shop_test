import nextVitals from "eslint-config-next/core-web-vitals";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = [
  ...nextVitals,
  {
    plugins: {
      "simple-import-sort": simpleImportSort
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../*"]
        }
      ]
    }
  }
];

export default eslintConfig;
