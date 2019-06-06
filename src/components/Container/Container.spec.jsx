import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import Container from './Container';
import * as S from './Container.styles';

describe('Container', () => {
  describe('Card', () => {
    const heading = faker.lorem.word();
    const words = faker.lorem.words();

    it('should render a heading when present', () => {
      const component = shallow(
        <Container.Card heading={heading}><p>{words}</p></Container.Card>,
      );

      expect(
        component.contains(<S.Heading>{heading}</S.Heading>),
      ).toBe(true);
    });

    it('should not render a heading when absent', () => {
      const component = shallow(
        <Container.Card><p>{words}</p></Container.Card>,
      );

      expect(
        component.contains(<S.Heading>{heading}</S.Heading>),
      ).toBe(false);
    });

    it('should render a child component', () => {
      const component = shallow(
        <Container.Card><p>{words}</p></Container.Card>,
      );

      expect(
        component.contains(<p>{words}</p>),
      ).toBe(true);
    });
  });
});
