module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [0, 'never'],
    'import/newline-after-import': 0,
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'ignore'
    }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'linebreak-style': ['off', 'windows'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['error', { allow: ['foo_', '_data'] }],
    camelcase: 'off',
    '@typescript-eslint/camelcase': ['error'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-irregular-whitespace': ['off']
  }
};
