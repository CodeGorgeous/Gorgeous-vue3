module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true,
    },
    globals: {
        ga: true,
        chrome: true,
        __DEV__: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:json/recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        '@vue/prettier',
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        parser: '@typescript-eslint/parser', // 解析 .ts 文件
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    },
}
