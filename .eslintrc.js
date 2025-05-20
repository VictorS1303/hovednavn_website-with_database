module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended", // Base ESLint rules
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "brace-style": ["error", "1tbs", { allowSingleLine: false }],
  },
}
