import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import Avatar from './Avatar';
import * as S from './Avatar.styles';

describe('Avatar', () => {
  describe('Round', () => {
    const props = {
      src: faker.image.avatar(),
    };

    it('should render the component with given `src` prop', () => {
      const component = shallow(
        <Avatar.Round {...props} />,
      );

      expect(
        component.contains(
          <S.Round src={props.src} />,
        ),
      ).toBe(true);
    });
  });

  describe('Square', () => {
    const props = {
      src: faker.image.avatar(),
    };

    it('should render the component with given `src` prop', () => {
      const component = shallow(
        <Avatar.Square {...props} />,
      );

      expect(
        component.contains(
          <S.Square src={props.src} />,
        ),
      ).toBe(true);
    });
  });
});
