import React from 'react';
import { Sidebar } from './Profile';
import * as fixtures from './Profile.fixtures';

describe('Profile', () => {
  describe('Sidebar', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Sidebar {...fixtures.sidebar} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
