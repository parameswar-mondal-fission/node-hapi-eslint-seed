module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    es6: true,
    mocha: true
  },
  extends: ['airbnb-base', 'eslint:recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: [0],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': [0],
    'no-unused-vars': [1],
    strict: 0,
    'max-len': ['error', { tabWidth: 2 }],
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'comma-dangle': ['error', 'never'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-case-declarations': 'off',
    'no-useless-escape': 'error',
    'space-before-blocks': 'error',
    'no-else-return': 'error',
    'spaced-comment': 'warn',
    'keyword-spacing': 'warn',
    'no-multiple-empty-lines': 'error',
    'comma-style': 'warn',
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'comma-spacing': 'error',
    'no-duplicate-imports': 'error'
  }
};
