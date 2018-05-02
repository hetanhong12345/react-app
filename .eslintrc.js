// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion:6,
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es6:true,
        node:true
    },
    extends: [
        "eslint:recommended",
       // "plugin:react/recommended"
    ],
    "globals": {
        'require': true,
        'fetch': true,
        'window': true,
        'FastClick': true,
        'process': true,
        'console': true,
        'Promise': true,
        'history':true,
        'document': true,
        'Hybrid':true,
        'module':true,
        '__dirname':true,
        '_czc':true
    },
    // add your custom rules here
    'rules': {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-console": 0,
        "no-unused-vars": 0
    }
};
