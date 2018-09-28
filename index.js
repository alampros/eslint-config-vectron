module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'sorting',
  ],
  rules: {
    'arrow-parens':           0,
    'arrow-body-style':       0,
    camelcase:                0,
    'class-methods-use-this': 0,
    'comma-dangle':           ['error', {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'ignore',
    }],
    'import/no-unresolved':     [0, { commonjs: true, amd: true }],
    'import/order':             ['error', {
      groups: [
        'builtin',
        ['internal', 'external'],
        ['sibling', 'parent'],
        'index',
      ],
    }],
    'import/no-extraneous-dependencies':       0,
    'import/extensions':                       0,
    indent:                                    ['error', 2, { SwitchCase: 1 }],
    'jsx-a11y/href-no-hash':                   0,
    'jsx-a11y/label-has-for':                  0,
    'jsx-a11y/label-has-associated-control':   [2, { controlComponents: ['Select'] }],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/media-has-caption':              0,
    'jsx-a11y/anchor-is-valid':                ['error', {
      components: ['Link'],
      specialLink: ['to']
    }],
    'key-spacing':                             ['error', { mode: 'minimum' }],
    'linebreak-style':                         ['error', 'unix'],
    'max-len':                                 ['warn', { code: 140 }],
    'new-cap':                                 ['error', { capIsNewExceptions: ['Debug'] }],
    'newline-per-chained-call':                0,
    'no-bitwise':                              0,
    'no-console':                              ['warn', { allow: ['warn', 'error'] }],
    'no-param-reassign':                       0,
    'no-plusplus':                             0,
    'no-underscore-dangle':                    0,
    'no-unused-vars':                          ['error', { args: 'after-used', argsIgnorePattern: '^_' }],
    'no-use-before-define':                    0,
    'prefer-template':                         0,
    quotes:                                    ['error', 'single'],
    'react/jsx-filename-extension':            [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line':       0,
    'react/forbid-prop-types':                 0,
    'react/no-multi-comp':                     0,
    'react/no-unused-prop-types':              0,
    'react/prop-types':                        [2, { ignore: ['children', 'className', 'style'] }],
    'react/no-array-index-key':                1,
    'react/react-in-jsx-scope':                0,
    'react/require-default-props':             0,
    'react/require-extension':                 0,
    'react/prefer-stateless-function':         0,
    'react/sort-comp':                         [1, {
      order: [
        'type-annotations',
        'lifecycle',
        'everything-else',
        'render',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'defaultProps',
          'contextTypes',
          'childContextTypes',
          'getDerivedStateFromProps',
          'messages',
          'mixins',
          'statics',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch'
        ]
      }
    }],
    semi:                          ['warn', 'never'],
    'spaced-comment':              0,
    'space-before-function-paren': ['error', {
      anonymous:  'never',
      named:      'never',
      asyncArrow: 'always'
    }],
    'keyword-spacing': ['error', {
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        catch: { after: false },
        switch: { after: false },
      },
    }],
  },
}
