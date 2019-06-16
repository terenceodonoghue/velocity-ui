import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import Container from './Container';
import * as S from './Container.styles';

describe('Container', () => {
  describe('Card', () => {
    const props = {
      children: <p>{faker.lorem.words()}</p>,
      heading: faker.lorem.word(),
    };

    it('should render a heading', () => {
      const component = shallow(
        <Container.Card {...props} />,
      );

      expect(
        component.contains(
          <S.Heading>{props.heading}</S.Heading>,
        ),
      ).toBe(true);
    });
  });
});
