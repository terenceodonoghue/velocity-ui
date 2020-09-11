/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Layout from './Surface';

describe('Surface', () => {
  describe('AppBar', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Layout.AppBar>AppBar Content</Layout.AppBar>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Card', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(
          withTheme(
            <Layout.Card heading="Card Heading">Card Content</Layout.Card>,
          ),
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
