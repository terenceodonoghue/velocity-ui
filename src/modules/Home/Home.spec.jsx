import React from 'react';
import { Welcome, renderCustomizedLabel as CustomizedLabel } from './Home';
import * as fixtures from './Home.fixtures';

describe('Home', () => {
  describe('Welcome', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Welcome />), {
          createNodeMock: () => ({
            parentElement: document.implementation.createHTMLDocument().body,
          }),
        })
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('renderCustomizedLabel', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<CustomizedLabel {...fixtures.customizedLabel} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
