import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import TestRenderer from 'react-test-renderer';
import { matchers } from 'jest-emotion';
import { Global, ThemeProvider, theme } from '~/components';

configure({ adapter: new Adapter() });
faker.seed(123);

const withTheme = (component) => (
  <ThemeProvider theme={theme}>
    <Global />
    {component}
  </ThemeProvider>
);

expect.extend(matchers);
global.mount = mount;
global.React = React;
global.renderer = TestRenderer;
global.shallow = shallow;
global.withTheme = withTheme;
