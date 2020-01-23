/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Passenger } from './Map';
import * as fixtures from './Map.fixtures';
import * as S from './Map.styles';

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

      expect(component.root.findByType(S.Interactions).props.children).toBe(
        '1 interaction',
      );

      component.update(
        withTheme(<Passenger {...fixtures.passenger} interactions={2} />),
      );
      expect(component.root.findByType(S.Interactions).props.children).toBe(
        '2 interactions',
      );
    });
  });
});
