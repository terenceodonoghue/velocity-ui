/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Welcome, renderCustomizedLabel as CustomizedLabel } from './index';

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
        .create(withTheme(<CustomizedLabel index={0} percent={86} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
