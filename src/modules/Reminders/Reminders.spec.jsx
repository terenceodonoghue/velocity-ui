import React from 'react';
import { shallow } from 'enzyme';
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

    it('should render first column', () => {
      const component = shallow(
        <Reminders.Kanban {...props} />,
      );

      expect(component.find(S.Column).at(0).props()['data-role']).toBe('service-needed');
      expect(component.find(S.Heading).at(0).text()).toBe('Service needed');
    });

    it('should render second column', () => {
      const component = shallow(
        <Reminders.Kanban {...props} />,
      );

      expect(component.find(S.Column).at(1).props()['data-role']).toBe('waiting');
      expect(component.find(S.Heading).at(1).text()).toBe('Waiting');
    });

    it('should render third column', () => {
      const component = shallow(
        <Reminders.Kanban {...props} />,
      );

      expect(component.find(S.Column).at(2).props()['data-role']).toBe('in-service');
      expect(component.find(S.Heading).at(2).text()).toBe('In service');
    });

    it('should render fourth column', () => {
      const component = shallow(
        <Reminders.Kanban {...props} />,
      );

      expect(component.find(S.Column).at(3).props()['data-role']).toBe('fully-serviced');
      expect(component.find(S.Heading).at(3).text()).toBe('Fully serviced');
    });
  });
});
