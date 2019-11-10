import React from 'react';
import Profile from './Profile';
import { sidebar } from './Profile.fixtures';

describe('Profile', () => {
  describe('Sidebar', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Profile.Sidebar {...sidebar} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
