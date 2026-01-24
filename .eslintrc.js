module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['redux-saga', 'react', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-restricted-properties': [
      2,
      {
        object: 'window',
        message:
          'Do not use browser API calls directly, look into /utils or contact the Architect team',
      },
      {
        object: 'document',
        message: "Don't need or manipulate the DOM, do it the React Way(tm)",
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        message: 'Do not use setGlobalStore',
        selector: "Identifier[name='setGlobalStore']",
      },
      {
        message: 'Do not use getGlobalStoreAsyncInjectors',
        selector: "Identifier[name='getGlobalStoreAsyncInjectors']",
      },
    ],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': [2, 'always-multiline'],
    'dot-notation': [
      'error',
      {
        allowPattern: '^[a-z]+(__[a-z]+)?(--[a-z]+)?$',
      },
    ],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': [
      2,
      {
        caseSensitive: true,
      },
    ],
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'import/no-cycle': [
      2,
      {
        maxDepth: 2,
      },
    ],
    indent: [
      2,
      2,
      {
        ignoredNodes: ['JSXElement'],
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'no-unused-vars': 2,
    'prefer-template': 2,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-no-target-blank': 0,
    'react/prefer-stateless-function': [
      1,
      {
        ignorePureComponents: true,
      },
    ],
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'redux-saga/no-yield-in-race': 2,
    'require-yield': 0,
    'import/no-webpack-loader-syntax': 0,
    '______________AIRBNB_CONFIG_OVERRIDES_CHECK!_____________': 0,
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        allowNamespace: true,
        ignore: [],
      },
    ],
    'react/jsx-props-no-multi-spaces': ['warn'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 1,
        maxEOF: 0,
      },
    ],
    'function-paren-newline': ['error', 'consistent'],
    'default-param-last': ['warn'],
    'import/no-import-module-exports': ['off'],
    'no-import-assign': ['off'],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-loss-of-precision': ['warn'],
    'no-unsafe-optional-chaining': [
      'error',
      {
        disallowArithmeticOperators: false,
      },
    ],
    'react/no-unused-class-component-methods': ['warn'],
    'react/jsx-no-useless-fragment': ['warn'],
    'no-promise-executor-return': ['warn'],
    'prefer-regex-literals': [
      'warn',
      {
        disallowRedundantWrapping: true,
      },
    ],
    'no-restricted-exports': [
      'warn',
      {
        restrictedNamedExports: ['default', 'then'],
      },
    ],
    'react/no-arrow-function-lifecycle': ['warn'],
    ______________TEMP_WARNINGS_TO_BE_SET_TO_ERROR_____________: 0,
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/control-has-associated-label': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 1,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/no-noninteractive-tabindex': 1,
    'jsx-a11y/role-has-required-aria-props': 1,
    'no-restricted-globals': 1,
    'react/button-has-type': 1,
    'react/no-array-index-key': 1,
    'react/no-did-update-set-state': 1,
    ______________TEMP_DISABLED_TO_BE_SET_TO_ERROR_____________: 0,
    'object-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unused-state': 0,
    'react/require-default-props': 0,
    'react/state-in-constructor': 0,
    'react/jsx-curly-brace-presence': 1,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
