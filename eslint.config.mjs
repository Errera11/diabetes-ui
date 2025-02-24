import antfu from '@antfu/eslint-config'

export default antfu({
    // formatters: {
    //         /**
    //          * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
    //          * By default uses Prettier
    //          */
    //         css: true,
    //         /**
    //          * Format HTML files
    //          * By default uses Prettier
    //          */
    //         html: true,
    //         /**
    //          * Format Markdown files
    //          * Supports Prettier and dprint
    //          * By default uses Prettier
    //          */
    //         markdown: 'prettier',
    //         prettierOptions: {
    //             printWidth: 80,
    //             singleQuote: true,
    //         },
    //     },
    stylistic: {
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        quotes: 'single',
    },
    rules: {
        'import/order': ['error', { 'newlines-between': 'always' }],
    }},)
