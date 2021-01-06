module.exports = {
  extends: [
    'standard',
    'standard-react',
    'plugin:import/typescript'
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    'simple-import-sort',
    'filenames',
    '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: __dirname,
      },
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        }],
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        indent: 'off',
        '@typescript-eslint/indent': ['error'],
      },
    },
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['warn', {
      arrays: 'only-multiline',
      objects: 'always-multiline',
      imports: 'only-multiline',
    }],
    'array-element-newline': ['error', {
      ArrayExpression: 'consistent',
      ArrayPattern: { minItems: 3 },
    }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': [0, { caseSensitive: true }],
    'import/order': 'off',
    'simple-import-sort/imports': ['error', {
      groups: [
        // Node.js builtins. You could also generate this regex if you use a `.js` config.
        // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
        [
          '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
        ],
        // Packages. `react` related packages come first.
        ['^react', '^@?\\w'],
        // Internal packages.
        ['^(@|components|hooks|contexts|layouts|pages|types|utils|api|api_supplimental)(/.*|$)'],
        // Side effect imports.
        ['^\\u0000'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports.
        ['^.+\\.s?css$'],
      ],
    }],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    quotes: ['warn', 'single'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/prop-types': ['error', { ignore: ['children', 'className', 'style'] }],
    'keyword-spacing': ['error', {
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        catch: { after: false },
        switch: { after: false },
      },
    }],
    'no-useless-constructor': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true, overrides: { arrow: { before: true, after: true } } }],
  },
}
