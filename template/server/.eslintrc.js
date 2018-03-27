// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'for-direction': 2,
    'no-await-in-loop': 2,
    'no-catch-shadow': 2,
    'no-console': 0,
    'no-debugger': 0,
    'no-duplicate-imports': 2,
    'object-curly-spacing': [2, 'always'],
    'require-await': 2,
    'template-curly-spacing': [2, 'always'],
    'wrap-iife': [2, 'inside']
  }
}
