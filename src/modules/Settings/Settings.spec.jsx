import React from 'react';
import { Integrations, Notifications, Personal, Theme } from './Settings';

describe('Settings', () => {
  describe('Personal Data', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Personal />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Integrations', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Integrations />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Notifications', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Notifications />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Theme', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Theme />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
