import { ThemeProvider } from 'emotion-theming';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { matchers } from 'jest-emotion';
import { theme } from '../src/components';

configure({ adapter: new Adapter() });
faker.seed(123);

const withTheme = (component) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);

expect.extend(matchers);
global.mount = mount;
global.React = React;
global.renderer = TestRenderer;
global.shallow = shallow;
global.withTheme = withTheme;
