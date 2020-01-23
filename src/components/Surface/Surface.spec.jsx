/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Surfaces from './Surface';

describe('Surface', () => {
  describe('AppBar', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Surfaces.AppBar>AppBar Content</Surfaces.AppBar>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Card', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(
          withTheme(
            <Surfaces.Card heading="Card Heading">Card Content</Surfaces.Card>,
          ),
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
