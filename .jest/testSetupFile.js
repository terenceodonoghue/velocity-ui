import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { matchers } from 'jest-emotion';

configure({ adapter: new Adapter() });

expect.extend(matchers);
global.mount = mount;
global.React = React;
global.renderer = TestRenderer;
global.shallow = shallow;
