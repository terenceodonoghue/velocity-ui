import React from 'react';
import Page from './Page';

describe('Page', () => {
  describe('AppBar', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Page.AppBar>
          AppBar Content
        </Page.AppBar>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});