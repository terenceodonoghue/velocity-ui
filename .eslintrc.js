module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    "mount": "readonly",
    "renderer": "readonly",
    "shallow": "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": [".storybook/*", "**/*.spec.jsx", "**/*.stories.jsx"] }],
    "import/prefer-default-export": "off",
    "max-len": "off",
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  }
};
