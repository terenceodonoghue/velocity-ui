module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    mount: 'readonly',
    renderer: 'readonly',
    shallow: 'readonly',
    SharedArrayBuffer: 'readonly',
    withTheme: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['emotion', 'prettier', 'react'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/*',
          '**/*.fixtures.js',
          '**/*.spec.jsx',
          '**/*.stories.jsx',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
};
