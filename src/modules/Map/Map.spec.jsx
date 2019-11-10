import React from 'react';
import Map from './Map';
import { passenger } from './Map.fixtures';
import * as S from './Map.styles';

describe('Map', () => {
  describe('Passenger', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Map.Passenger {...passenger} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('uses correct plurality', () => {
      const component = renderer.create(
        withTheme(<Map.Passenger {...passenger} interactions={1} />),
      );

      expect(component.root.findByType(S.Interactions).props.children).toBe(
        '1 interaction',
      );

      component.update(
        withTheme(<Map.Passenger {...passenger} interactions={2} />),
      );
      expect(component.root.findByType(S.Interactions).props.children).toBe(
        '2 interactions',
      );
    });
  });
});
