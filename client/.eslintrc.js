/* eslint-disable no-undef */
module.exports = {
    plugins: ['jest,react'],
    root: true,
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
    env: {
        es2021: true,
        node: true,
        'jest/globals': true,
    },
    rules: {
        'no-console': 'error',
    },
};
