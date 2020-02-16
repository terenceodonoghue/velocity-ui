import React, { FunctionComponent } from 'react';
import * as Profile from './Profile';
import * as fixtures from './Profile.fixtures';

export default {
  title: 'Modules/User Profile',
};

export const Sidebar: FunctionComponent = () => (
  <Profile.Sidebar {...fixtures.sidebar} />
);
