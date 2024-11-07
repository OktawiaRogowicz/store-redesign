module.exports = {
  env: {
    node: true,
  },
  extends: [
    "next",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.spec.tsx"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    quotes: [1, "double", { avoidEscape: true }],
    "prefer-const": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
