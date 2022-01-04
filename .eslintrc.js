module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": 0,
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": 0,
    "script-setup-uses-vars": 0,
    "vue/multi-word-component-names": 1,
  },
};
