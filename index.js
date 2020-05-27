module.exports = {
  parser: "@typescript-eslint/parser",

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  globals: {
    globalThis: true,
  },

  plugins: [
    "@typescript-eslint",
    "promise",
    "unicorn",
    "sonarjs",
    "react",
    "react-hooks",
    "prettier",
    "formatjs",
    "import",
  ],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },

  rules: {
    // general
    "max-lines": ["warn", 500],
    "no-console": "warn",
    "object-shorthand": "warn",
    "no-unneeded-ternary": "warn",
    "no-nested-ternary": "warn",
    indent: "off",
    "no-prototype-builtins": "warn",
    "no-fallthrough": "warn",
    "newline-before-return": "warn",
    quotes: [
      "warn",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ["warn", "never"],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "multiline-block-like", next: "*" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: "*",
        next: [
          "return",
          "throw",
          "try",
          "while",
          "do",
          "if",
          "switch",
          "function",
          "for",
          "multiline-const",
        ],
      },
      { blankLine: "always", prev: "multiline-const", next: "*" },
    ],
    "no-restricted-imports": [
      "warn",
      {
        name: "react-intl",
        message: "Use src/shared/intl instead!",
      },
    ],

    // import
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always-and-inside-groups",
      },
    ],
    "import/newline-after-import": "warn",
    "import/no-cycle": "warn",
    "import/no-unused-modules": "warn",
    "import/no-default-export": "warn",
    "import/default": "off",

    // ts
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "unicorn/explicit-length-check": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^_+",
        argsIgnorePattern: "^_+",
        ignoreRestSiblings: true,
      },
    ],

    // prettier
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "all",
        semi: false,
        arrowParens: "always",
        singleQuote: false,
        printWidth: 80,
        bracketSpacing: true,
      },
    ],

    // async suffix
    "no-restricted-syntax": [
      "warn",
      {
        selector: "FunctionDeclaration[async=false][id.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector: "FunctionDeclaration[async=true][id.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
      {
        selector: "MethodDefinition[value.async=false][key.name=/Async$/]",
        message: "Method ending in 'Async' must be declared async",
      },
      {
        selector: "MethodDefinition[value.async=true][key.name!=/Async$/]",
        message: "Async method name must end in 'Async'",
      },
      {
        selector:
          "Property[value.type=/FunctionExpression$/][value.async=false][key.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector:
          "Property[value.type=/FunctionExpression$/][value.async=true][key.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
      {
        selector:
          "VariableDeclarator[init.type=/FunctionExpression$/][init.async=false][id.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector:
          "VariableDeclarator[init.type=/FunctionExpression$/][init.async=true][id.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
    ],

    // unicorn
    "unicorn/prevent-abbreviations": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/filename-case": [
      "warn",
      {
        cases: {
          kebabCase: true,
        },
      },
    ],
    "unicorn/no-abusive-eslint-disable": "warn",
    "unicorn/better-regex": "warn",
    "unicorn/prefer-number-properties": "warn",
    "unicorn/prefer-string-slice": "warn",
    "unicorn/import-index": "warn",
    "unicorn/no-nested-ternary": "warn",
    "unicorn/prefer-set-has": "warn",
    "unicorn/no-zero-fractions": "warn",
    "unicorn/prefer-includes": "warn",
    "unicorn/catch-error-name": "warn",
    "unicorn/prefer-query-selector": "warn",
    "unicorn/throw-new-error": "warn",
    "unicorn/new-for-builtins": "warn",
    "unicorn/no-null": "off",

    // Sonar
    "sonarjs/no-small-switch": "warn",
    "sonarjs/prefer-immediate-return": "off",
    "sonarjs/cognitive-complexity": "warn",
    "sonarjs/no-identical-expressions": "warn",
    "sonarjs/no-unused-collection": "warn",
    "sonarjs/no-identical-functions": "warn",
    "sonarjs/no-collapsible-if": "warn",
    "sonarjs/no-duplicated-branches": "warn",
    "sonarjs/no-redundant-boolean": "warn",

    // react
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".tsx"] }],
    "react/sort-comp": "warn",
    "react/jsx-no-literals": "warn",
    "react/prop-types": "off",
    "react/display-name": "warn",
    "react/no-deprecated": "warn",
    "react/no-children-prop": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/self-closing-comp": ["warn", { component: true, html: true }],

    // promise
    "promise/always-return": "warn",
    "promise/no-return-wrap": "warn",
    "promise/param-names": "warn",
    "promise/catch-or-return": "warn",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "off",
    "promise/no-new-statics": "warn",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",

    // format js
    "formatjs/enforce-default-message": ["warn", "literal"],
    "formatjs/no-multiple-whitespaces": "warn",
    "formatjs/no-multiple-plurals": "warn",
  },
}
