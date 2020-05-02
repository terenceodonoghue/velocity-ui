module.exports = {
  extends: ['@terenceodonoghue/react'],
  globals: {
    mount: 'readonly',
    renderer: 'readonly',
    shallow: 'readonly',
    withTheme: 'readonly',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/*',
          '**/*.d.ts',
          '**/*.fixtures.ts',
          '**/*.spec.tsx',
          '**/*.stories.tsx',
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
};
