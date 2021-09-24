module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // Vue 3
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    "plugin:vue/base",
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "airbnb-base",
  ],
  rules: {},
};
