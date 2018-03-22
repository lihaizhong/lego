// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'for-direction': 2,
    'no-await-in-loop': 2,
    'no-catch-shadow': 2,
    // allow console during production
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' ,
    'no-duplicate-imports': 2,
    'object-curly-spacing': [2, 'always'],
    'require-await': 2,
    'template-curly-spacing': [2, 'always'],
    'wrap-iife': [2, 'inside']
  }
}
