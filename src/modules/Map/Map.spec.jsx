import React from 'react';
import Map from './Map';
import { passenger } from './Map.fixtures';
import * as S from './Map.styles';

describe('Map', () => {
  describe('Passenger', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<Map.Passenger {...passenger} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('uses correct plurality', () => {
      const component = shallow(<Map.Passenger {...passenger} />);

      component.setProps({ interactions: 1 });
      expect(component.find(S.Interactions).text()).toEqual('1 interaction');

      component.setProps({ interactions: 2 });
      expect(component.find(S.Interactions).text()).toEqual('2 interactions');
    });
  });
});
