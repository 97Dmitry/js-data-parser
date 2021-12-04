module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaFeatures: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  globals: {
    window: true,
    document: true,
  },
};
