/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '~/components';

describe('Button', () => {
  describe('Contained', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Button.Contained>Button Text</Button.Contained>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Outlined', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Button.Outlined>Button Text</Button.Outlined>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Text', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Button.Text>Button Text</Button.Text>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Fab', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Button.Fab>+</Button.Fab>))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
