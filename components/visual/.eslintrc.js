module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended","plugin:vue/base"],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "plugins": ["vue"],
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-newline": ["error", {
            "multiline": true
        }],
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": "error",
        "array-element-newline": "off",
        "arrow-body-style": "off",
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "block-scoped-var": "warn",
        "block-spacing": ["error", "never"],
        "brace-style": ["error", "stroustrup"],
        "callback-return": "off",
        "camelcase": "error",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-dangle": "error",
        "comma-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "comma-style": ["error", "last"],
        "complexity": ["warn", 10],
        "computed-property-spacing": ["error", "never"],
        "consistent-return": ["warn", {
            "treatUndefinedAsUnspecified": true
        }],
        "consistent-this": "off",
        "curly": ["error", "all"],
        "default-case": "off",
        "dot-location": ["warn", "property"],
        "dot-notation": ["warn", {
            "allowKeywords": false
        }],
        "eol-last": ["error", "always"],
        "eqeqeq": ["error", "always", {
            "null": "ignore"
        }],
        "func-call-spacing": ["error", "never"],
        "func-name-matching": "off",
        "func-names": ["error", "always"],
        "func-style": "off",
        "function-paren-newline": "off",
        "generator-star-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "global-require": "warn",
        "guard-for-in": "warn",
        "handle-callback-err": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "indent-legacy": "off",
        "init-declarations": "warn",
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true
        }],
        "keyword-spacing": "error",
        "line-comment-position": "off",
        "linebreak-style": ["warn", "unix"],
        "lines-around-comment": "off",
        "lines-around-directive": "error",
        "lines-between-class-members": "error",
        "max-classes-per-file": "error",
        "max-depth": ["warn", 3],
        "max-len": ["error", 120, 4, {
            "ignoreUrls": true
        }],
        "max-lines": ["warn", 800],
        "max-lines-per-function": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": ["warn", 30, {
            "ignoreTopLevelFunctions": true
        }],
        "max-statements-per-line": "error",
        "multiline-comment-style": "error",
        "new-cap": "warn",
        "new-parens": "warn",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "warn",
        "no-array-constructor": "off",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-buffer-constructor": "warn",
        "no-caller": "error",
        "no-catch-shadow": "off",
        "no-confusing-arrow": ["error", {
            "allowParens": true
        }],
        "no-continue": "off",
        "no-div-regex": "off",
        "no-duplicate-imports": "warn",
        "no-else-return": "off",
        "no-empty-function": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "warn",
        "no-extra-label": "error",
        "no-extra-parens": ["error", "functions"],
        "no-floating-decimal": "warn",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "off",
        "no-iterator": "off",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "error",
        "no-loop-func": "warn",
        "no-magic-numbers": "off",
        "no-misleading-character-class": "error",
        "no-mixed-operators": "off",
        "no-mixed-requires": "off",
        "no-multi-assign": "warn",
        "no-multi-spaces": ["error", {
            "exceptions": {
                "Property": false
            }
        }],
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "warn",
        "no-native-reassign": "error",
        "no-negated-condition": "warn",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-require": "warn",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": ["warn", {
            "props": true
        }],
        "no-path-concat": "off",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "error",
        "no-prototype-builtins": "off",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": ["error", "except-parens"],
        "no-return-await": "error",
        "no-script-url": "warn",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "off",
        "no-spaced-func": "error",
        "no-sync": "off",
        "no-tabs": "warn",
        "no-template-curly-in-string": "off",
        "no-ternary": "off",
        "no-throw-literal": "warn",
        "no-undef-init": "warn",
        "no-undefined": "off",
        "no-underscore-dangle": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": ["warn", {
            "allowShortCircuit": true
        }],
        "no-use-before-define": ["error", {
            "variables": false,
            "classes": false,
            "functions": true
        }],
        "no-useless-call": "warn",
        "no-useless-computed-key": "error",
        "no-useless-concat": "warn",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "warn",
        "no-with": "error",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": ["error", {
            "consistent": true,
            "multiline": true
        }],
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "object-shorthand": ["off", "consistent-as-needed"],
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": "error",
        "operator-assignment": "off",
        "operator-linebreak": ["error", "before"],
        "padded-blocks": "off",
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "warn",
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "warn",
        "prefer-object-spread": "off",
        "prefer-promise-reject-errors": "warn",
        "prefer-reflect": "off",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": ["error", "single"],
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "warn",
        "require-jsdoc": "off",
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "semi-style": ["error", "last"],
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": ["warn", "always"],
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never"
        }],
        "space-in-parens": ["warn", "never"],
        "space-infix-ops": "warn",
        "space-unary-ops": "warn",
        "spaced-comment": ["warn", "always"],
        "strict": "off",
        "switch-colon-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "symbol-description": "warn",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": "warn",
        "valid-jsdoc": "off",
        "vars-on-top": "off",
        "wrap-iife": ["warn", "any"],
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "yoda": "warn",
        "react/no-deprecated": "off",
        "no-empty-pattern": "error",
        "react/jsx-curly-spacing": "off",
        "react/jsx-filename-extension": "off",
        "react/require-optimization": "off",
        "react/no-string-refs": "off",
        "no-octal": "error",
        "react/jsx-no-comment-textnodes": "off",
        "no-new-symbol": "error",
        "react/sort-prop-types": "off",
        "react/no-unused-prop-types": "off",
        "no-regex-spaces": "warn",
        "react/no-unknown-property": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-no-target-blank": "off",
        "no-useless-escape": "error",
        "react/jsx-key": "off",
        "no-self-assign": "error",
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "react/jsx-pascal-case": "off",
        "no-empty": "error",
        "no-func-assign": "warn",
        "no-unused-vars": "error",
        "no-dupe-args": "error",
        "no-redeclare": "warn",
        "no-constant-condition": "error",
        "react/jsx-boolean-value": "off",
        "no-dupe-keys": "error",
        "react/void-dom-elements-no-children": "off",
        "require-yield": "warn",
        "react/no-is-mounted": "off",
        "no-fallthrough": "error",
        "react/prefer-es6-class": "off",
        "react/no-will-update-set-state": "off",
        "no-irregular-whitespace": "error",
        "no-global-assign": "error",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-first-prop-new-line": "off",
        "no-unreachable": "error",
        "no-console": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "babel/object-curly-spacing": "off",
        "react/jsx-wrap-multilines": "off",
        "react/jsx-indent": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-vars": "off",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "use-isnan": "error",
        "no-delete-var": "error",
        "react/sort-comp": "off",
        "react/style-prop-object": "off",
        "no-case-declarations": "error",
        "react/no-did-mount-set-state": "off",
        "react/jsx-no-bind": "off",
        "no-duplicate-case": "error",
        "react/no-danger-with-children": "off",
        "no-extra-semi": "error",
        "react/no-multi-comp": "off",
        "no-extra-boolean-cast": "error",
        "react/jsx-no-undef": "off",
        "react/prefer-stateless-function": "off",
        "react/no-danger": "off",
        "no-unexpected-multiline": "warn",
        "no-unused-labels": "error",
        "no-debugger": "error",
        "react/forbid-prop-types": "off",
        "valid-typeof": "error",
        "react/no-did-update-set-state": "off",
        "no-undef": "error",
        "react/jsx-handler-names": "off",
        "react/no-render-return-value": "off",
        "react/no-find-dom-node": "off",
        "for-direction": "off",
        "react/jsx-tag-spacing": "off",
        "react/jsx-equals-spacing": "off",
        "react/jsx-sort-props": "off",
        "no-ex-assign": "error",
        "no-this-before-super": "error",
        "multiline-ternary": "off",
        "no-dupe-class-members": "error",
        "react/jsx-max-props-per-line": "off",
        "no-obj-calls": "error",
        "react/require-default-props": "off",
        "react/no-direct-mutation-state": "off",
        "constructor-super": "error",
        "no-invalid-regexp": "error",
        "react/self-closing-comp": "off",
        "react/jsx-no-duplicate-props": "off",
        "react/no-set-state": "off",
        "react/no-array-index-key": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-compare-neg-zero": "error",
        "react/forbid-elements": "off",
        "react/jsx-uses-react": "off",
        "no-sparse-arrays": "error",
        "react/forbid-component-props": "off",
        "react/require-render-return": "off",
        "react/jsx-no-literals": "off",
        "no-class-assign": "error",
        "no-trailing-spaces": "error",
        "no-empty-character-class": "error",
        "react/no-children-prop": "off",
        "no-control-regex": "warn",
        "no-inner-declarations": "error",
        "react/prop-types": "off"
    }
};