module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-unresolved': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
  },
};
