import React from 'react';
import Button from './Button';

describe('Button', () => {
  describe('Contained', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Button.Contained>Button Text</Button.Contained>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Outlined', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Button.Outlined>Button Text</Button.Outlined>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Text', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Button.Text>Button Text</Button.Text>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Fab', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<Button.Fab>+</Button.Fab>).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
