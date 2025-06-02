module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'airbnb-typescript'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'project': './tsconfig.json',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        "import",
        "prettier"
    ],
    'rules': {
        "react/react-in-jsx-scope": "off",
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        '@typescript-eslint/no-unused-vars': "off",
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],
    },
};
