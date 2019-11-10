import React from 'react';
import Settings from './Settings';

describe('Settings', () => {
  describe('Personal Data', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Settings.Personal />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Integrations', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Settings.Integrations />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Notifications', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Settings.Notifications />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Theme', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Settings.Theme />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
