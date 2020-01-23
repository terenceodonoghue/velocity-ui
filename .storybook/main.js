const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, '../src')],
      },
    },
  ],
  stories: [
    '../src/components/**/*.stories.(ts|md)x',
    '../src/modules/**/*.stories.(ts|md)x',
  ],
};
