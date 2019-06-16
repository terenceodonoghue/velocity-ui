import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import Button from './Button';
import * as S from './Button.styles';

describe('Button', () => {
  describe('Contained', () => {
    const props = {
      children: faker.lorem.word(),
    };

    it('should render the button with given `children` prop', () => {
      const component = shallow(
        <Button.Contained {...props} />,
      );

      expect(
        component.contains(
          <S.Contained>{props.children}</S.Contained>,
        ),
      ).toBe(true);
    });
  });

  describe('Outlined', () => {
    const props = {
      children: faker.lorem.word(),
    };

    it('should render the button with given `children` prop', () => {
      const component = shallow(
        <Button.Outlined {...props} />,
      );

      expect(
        component.contains(
          <S.Outlined>{props.children}</S.Outlined>,
        ),
      ).toBe(true);
    });
  });

  describe('Text', () => {
    const props = {
      children: faker.lorem.word(),
    };

    it('should render the button with given `children` prop', () => {
      const component = shallow(
        <Button.Text {...props} />,
      );

      expect(
        component.contains(
          <S.Text>{props.children}</S.Text>,
        ),
      ).toBe(true);
    });
  });

  describe('Fab', () => {
    const props = {
      children: faker.lorem.word(),
    };

    it('should render the button with given `children` prop', () => {
      const component = shallow(
        <Button.Fab {...props} />,
      );

      expect(
        component.contains(
          <S.Fab>{props.children}</S.Fab>,
        ),
      ).toBe(true);
    });
  });
});
