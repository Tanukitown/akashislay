import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default tseslint.config({
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  ignores: ["**/out/**", "**/node_modules/**", "**/.next/**"],
  extends: [
    eslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
  ],
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    react,
    prettier,
  },
  languageOptions: {
    parser: tseslint.parser
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-curly-brace-presence": [2, "never"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": 2,
    "import/first": 2,
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    "import/no-duplicates": ["error", { "prefer-inline": true }],
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        groups: [
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "builtin",
          "object",
          "type",
        ],
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
      },
    ],
  },
});
