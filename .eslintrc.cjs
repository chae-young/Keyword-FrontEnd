module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
    // 'eslint:recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],

  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },

  rules: {
    camelcase: 'off',
    // index key
    'react/no-array-index-key': 'off',
    // 'react' 제거
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // label id 연결
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor']
      }
    ],
    'react/require-default-props': 'off',
    // arrow 함수 형식 사용
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'comma-dangle': ['error', 'never'],
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        ts: 'never',
        tsx: 'never',
        js: 'never'
      }
    ]
  }
};
