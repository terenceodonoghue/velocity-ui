import React from 'react';
import Home from './Home';

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
});
