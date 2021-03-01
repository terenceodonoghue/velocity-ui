module.exports = {
  env: {
    jest: true,
  },
  extends: ['@terenceodonoghue/react'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './jest.setup.ts',
          '**/test-utils.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
