module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    semi: [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'keyword-spacing': [2, { before: true, after: true }],
    'space-before-blocks': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'no-console': 'off',
    'no-multi-str': 'off',
    curly: ['error', 'multi-line'],
  },
};
