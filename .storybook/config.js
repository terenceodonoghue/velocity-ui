import { addParameters, configure } from '@storybook/react';
import theme from './velocity-theme';

addParameters({
  options: {
    theme,
  },
});

const loadStories = () => {
  const req = require.context('../components', true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
