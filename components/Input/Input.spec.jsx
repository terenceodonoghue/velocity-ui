/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Input from './Input';

describe('Input', () => {
  describe('Radio', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Input.Radio />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Slider', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Input.Slider min={0} max={100} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Switch', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Input.Switch />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Text', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(
          withTheme(
            <Input.Text
              label="Label Text"
              placeholder="Placeholder"
              type="text"
            />,
          ),
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
