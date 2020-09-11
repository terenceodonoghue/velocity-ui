module.exports = {
  extends: ['@terenceodonoghue/react'],
  env: {
    jest: true,
  },
  globals: {
    mount: 'readonly',
    renderer: 'readonly',
    shallow: 'readonly',
    withTheme: 'readonly',
  },
  rules: {
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
