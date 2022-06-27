module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  overrides: [
    {
      files: ["packages/*/src/**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  ],
  ignorePatterns: [
    "rollup.config.js",
    "package.json",
    "tsconfig.json",
    "node_modules"
  ],
  rules: {
    "import/prefer-default-export": 0
  }
}
