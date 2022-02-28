module.exports = {
    extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
    },

    plugins: ["@typescript-eslint", "sort-keys-fix"],
    rules: {
        //"comma-dangle": ["error", "always-multiline"],
        "func-names": ["error", "never"],
        "import/extensions": "off",
        //"indent": ["error", 4],
        "no-return-assign": ["error", "except-parens"],
        "quote-props": ["error", "consistent-as-needed"],
        "prefer-const": [
            "error",
            {
                destructuring: "all",
            },
        ],
        "sort-imports": [
            "error",
            {
                ignoreDeclarationSort: true,
            },
        ],
        "sort-keys-fix/sort-keys-fix": "error",
    },
};
