/* eslint-disable no-undef */
module.exports = {
    plugins: ['react'],
    root: true,
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
    env: {
        es2021: true,
        node: true,
        browser: true,
    },
    rules: {
        'no-console': 'error',
    },
};
