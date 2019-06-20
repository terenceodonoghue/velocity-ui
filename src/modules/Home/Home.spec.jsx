import React from 'react';
import Home from './Home';
import { customizedLabel } from './Home.fixtures';

describe('Home', () => {
  describe('Welcome', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Home.Welcome />,
        {
          createNodeMock: () => (
            { parentElement: document.implementation.createHTMLDocument().body }
          ),
        },
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('renderCustomizedLabel', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Home.renderCustomizedLabel {...customizedLabel} />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
