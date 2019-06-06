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
      expect(shallow(<Container.Card heading={heading}>{words}</Container.Card>)
        .contains(<S.Heading>{heading}</S.Heading>))
        .toBe(true);
    });

    it('should not render a heading when absent', () => {
      expect(shallow(<Container.Card>{words}</Container.Card>)
        .contains(<S.Heading>{heading}</S.Heading>))
        .toBe(false);
    });

    it('should render a child component', () => {
      expect(shallow(<Container.Card><p>{words}</p></Container.Card>)
        .contains(<p>{words}</p>))
        .toBe(true);
    });
  });
});
