/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Buttons from './Button';

describe('Button', () => {
  describe('Contained', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Buttons.Contained>Button Text</Buttons.Contained>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Outlined', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Buttons.Outlined>Button Text</Buttons.Outlined>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Text', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Buttons.Text>Button Text</Buttons.Text>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Fab', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Buttons.Fab>+</Buttons.Fab>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
