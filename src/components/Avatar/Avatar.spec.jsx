import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import Avatar from './Avatar';
import * as S from './Avatar.styles';

describe('Avatar', () => {
  describe('Round', () => {
    const src = faker.image.avatar();

    it('should render an image from a given URL', () => {
      const component = shallow(
        <Avatar.Round src={src} />,
      );

      expect(
        component.contains(<S.Round src={src} />),
      ).toBe(true);
    });
  });

  describe('Square', () => {
    const src = faker.image.avatar();

    it('should render an image from a given URL', () => {
      const component = shallow(
        <Avatar.Square src={src} />,
      );

      expect(
        component.contains(<S.Square src={src} />),
      ).toBe(true);
    });
  });
});
