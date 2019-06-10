import React from 'react';
import { mount, shallow } from 'enzyme';
import faker from 'faker';
import Reminders from './Reminders';
import * as S from './Reminders.styles';

describe('Reminders', () => {
  describe('Kanban', () => {
    const props = {
      data: Array.from(
        { length: 4 },
        () => Array.from(
          { length: Math.floor(Math.random() * 10) },
          () => ({
            date: faker.lorem.word(),
            name: faker.lorem.word(),
            price: faker.lorem.word(),
            type: faker.lorem.word(),
          }),
        ),
      ),
    };

    it('should apply correct styles to column heading', () => {
      const count = Math.floor(Math.random() * 10);

      const component = mount(
        <S.Heading count={count} />,
      );

      expect(component).toHaveStyleRule('content', `"${count.toString()}"`, { target: '::after' });
    });

    it('should render first column', () => {
      const component = shallow(
        <Reminders.Kanban {...props} />,
      );

      expect(component.find(S.Column).at(0).props()['data-role']).toBe('service-needed');
      expect(component.find(S.Column).at(0).containsMatchingElement(
        <S.Heading count={props.data[0].length}>
          Service needed
        </S.Heading>,
      )).toBe(true);
    });

    it('should render second column', () => {
      const component = shallow(
        <Reminders.Kanban {...props} />,
      );

      expect(component.find(S.Column).at(1).props()['data-role']).toBe('waiting');
      expect(component.find(S.Column).at(1).containsMatchingElement(
        <S.Heading count={props.data[1].length}>
          Waiting
        </S.Heading>,
      )).toBe(true);
    });

    it('should render third column', () => {
      const component = shallow(
        <Reminders.Kanban {...props} />,
      );

      expect(component.find(S.Column).at(2).props()['data-role']).toBe('in-service');
      expect(component.find(S.Column).at(2).containsMatchingElement(
        <S.Heading count={props.data[2].length}>
          In service
        </S.Heading>,
      )).toBe(true);
    });

    it('should render fourth column', () => {
      const component = shallow(
        <Reminders.Kanban {...props} />,
      );

      expect(component.find(S.Column).at(3).props()['data-role']).toBe('fully-serviced');
      expect(component.find(S.Column).at(3).containsMatchingElement(
        <S.Heading count={props.data[3].length}>
          Fully serviced
        </S.Heading>,
      )).toBe(true);
    });
  });
});
