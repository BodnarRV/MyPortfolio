import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default {
  ignores: ["dist"],
  files: ["**/*.{js,jsx,ts,tsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: "latest",
      ecmaFeatures: { jsx: true },
      sourceType: "module",
      project: "./tsconfig.json",
    },
  },
  settings: { react: { version: "detect" } },
  plugins: {
    react,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "@typescript-eslint": typescriptPlugin,
  },
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...typescriptPlugin.configs.recommended.rules,
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
};
