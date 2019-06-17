import React from 'react';
import Input from './Input';

describe('Input', () => {
  describe('Label', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Input.Label>
          Label Text
        </Input.Label>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Text', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Input.Text type="text" placeholder="Placeholder" />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Switch', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Input.Switch />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Slider', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Input.Slider min={0} max={100} />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
