module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
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
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
};
