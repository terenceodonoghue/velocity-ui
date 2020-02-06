/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Passenger } from './Map';
import * as fixtures from './Map.fixtures';

describe('Map', () => {
  describe('Passenger', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Passenger {...fixtures.passenger} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('uses correct plurality', () => {
      const component = renderer.create(
        withTheme(<Passenger {...fixtures.passenger} interactions={1} />),
      );

      expect(
        component.root.findAll(
          (el) =>
            el.type === 'p' &&
            el.children &&
            el.children[0] === '1 interaction',
        ),
      ).toHaveLength(1);

      component.update(
        withTheme(<Passenger {...fixtures.passenger} interactions={2} />),
      );

      expect(
        component.root.findAll(
          (el) =>
            el.type === 'p' &&
            el.children &&
            el.children[0] === '2 interactions',
        ),
      ).toHaveLength(1);
    });
  });
});
