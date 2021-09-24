# vite-eslint-config
Guide to setting Vite with ESLint

## Install Depencies
```
npm install -D eslint eslint-plugin-vue vite-plugin-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser@vue/eslint-config-typescript
```

## Settings

### Eslint
Add in `.eslintrc` for Vue 3
```js
globals: {
  defineProps: "readonly",
  defineEmits: "readonly",
  defineExpose: "readonly",
  withDefaults: "readonly",
},
```

Use Airbnb rules

- Inistall the dependencies:

  ```bash
  npm i -D eslint-plugin-import eslint-config-airbnb-base
  ```

- add rules in `.eslintrc`

  ```js
  extends: [
    // (...)
    "airbnb-base",
  ],
  ```

### Set Vite eslint plugin and directory alias `@`
Edit `vite.config.js`:
```js
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    eslintPlugin(),
    // (...)
  ],
});
```

Edit `tsconfig.json`
```json
"compilerOptions": {
  // (...)
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```