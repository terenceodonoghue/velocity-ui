module.exports = {
  addons: ['@storybook/addon-docs', '@storybook/preset-create-react-app'],
  stories: [
    '../src/components/**/*.stories.(js|md)x',
    '../src/modules/**/*.stories.(js|md)x',
  ],
};
