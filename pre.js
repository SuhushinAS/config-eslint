module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        './rules/eslint.js',
        './rules/prettier.js',
        './rules/flowtype.js',
        './rules/react.js',
        './rules/jsx-a11y.js',
        './rules/import.js',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['import', 'react', 'flowtype', 'react', 'react-hooks', 'jsx-a11y'],
    rules: {
        'accessor-pairs': 2,
        'array-callback-return': 2,
        camelcase: [2, {allow: ['^UNSAFE_'], properties: 'never'}],
        complexity: [2, {max: 10}],
        'consistent-return': 2,
        curly: 2,
        'default-case': 2,
        'dot-notation': 2,
        eqeqeq: 2,
        'flowtype/newline-after-flow-annotation': [2, 'never'],
        'flowtype/no-dupe-keys': 2,
        'flowtype/no-existential-type': 2,
        'flowtype/no-primitive-constructor-types': 2,
        'flowtype/no-weak-types': [
            2,
            {
                Function: true,
                Object: true,
                any: false,
            },
        ],
        'flowtype/require-valid-file-annotation': 2,
        'flowtype/sort-keys': [2, 'asc', {caseSensitive: true, natural: true}],
        'func-style': [2, 'declaration', {allowArrowFunctions: true}],
        'guard-for-in': 2,
        'id-length': [2, {max: 30, min: 1}],
        'id-match': [2, '^[a-zA-Z0-9$_]*$'],
        'jsx-a11y/label-has-for': [
            2,
            {
                allowChildren: false,
                components: ['Label'],
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'line-comment-position': 2,
        'max-classes-per-file': 2,
        'max-depth': 2,
        'max-lines': [2, {max: 500}],
        'max-lines-per-function': [2, {max: 150}],
        'max-nested-callbacks': [2, 4],
        'max-params': [2, {max: 5}],
        'new-cap': 2,
        'no-alert': 2,
        'no-array-constructor': 2,
        'no-async-promise-executor': 2,
        'no-await-in-loop': 2,
        'no-bitwise': 2,
        'no-caller': 2,
        'no-catch-shadow': 2,
        'no-console': [2, {allow: ['error', 'warn', 'info']}],
        'no-continue': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-function': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-label': 2,
        'no-implicit-coercion': 2,
        'no-implied-eval': 2,
        'no-inline-comments': 2,
        'no-iterator': 2,
        'no-label-var': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-misleading-character-class': 2,
        'no-multi-assign': 2,
        'no-nested-ternary': 2,
        'no-new-func': 2,
        'no-new-object': 2,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 2,
        'no-proto': 2,
        'no-prototype-builtins': 2,
        'no-return-assign': 2,
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow': 2,
        'no-shadow-restricted-names': 2,
        'no-throw-literal': 2,
        'no-undef-init': 2,
        'no-unmodified-loop-condition': 2,
        'no-unneeded-ternary': 2,
        'no-unused-expressions': 2,
        'no-unused-vars': [2, {args: 'after-used', argsIgnorePattern: '^e$', ignoreRestSiblings: true, vars: 'all'}],
        'no-useless-call': 2,
        'no-useless-catch': 2,
        'no-useless-concat': 2,
        'no-useless-return': 2,
        'no-var': 2,
        'no-void': 2,
        'no-with': 2,
        'object-shorthand': 2,
        'one-var': [2, 'never'],
        'operator-assignment': 2,
        radix: 2,
        'react/jsx-filename-extension': 2,
        'react/jsx-no-bind': [
            2,
            {
                ignoreDOMComponents: true,
            },
        ],
        'react/jsx-sort-props': 2,
        'react/no-unsafe': 2,
        'react-hooks/exhaustive-deps': 2,
        'react-hooks/rules-of-hooks': 2,
        'require-jsdoc': [
            2,
            {
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                    MethodDefinition: true,
                },
            },
        ],
        'require-unicode-regexp': 2,
        'sort-keys': [2, 'asc', {caseSensitive: true, natural: true}],
        'spaced-comment': 2,
        'valid-jsdoc': [
            2,
            {
                requireParamType: false,
                requireReturn: false,
                requireReturnType: false,
            },
        ],
        yoda: [2, 'always'],
    },
    settings: {
        react: {
            version: '^16.8.0',
        },
    },
};