module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends":
        [ 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/src/**/*.{test,stories}.{ts,tsx}"
            ],
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off"
            },
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "i18next",
        "react-hooks"
    ],

    parser: '@typescript-eslint/parser',
    "rules": {
        "react/display-name": "off",
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        '@typescript-eslint/indent': [2,4],
        indent: "off",
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/naming-convention": "off",
        "i18next/no-literal-string": ["error",{markupOnly:true}],
        "max-len": ["error",{"ignoreComments": true,code: 150}],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error" // Checks effect dependencies
    }
}
