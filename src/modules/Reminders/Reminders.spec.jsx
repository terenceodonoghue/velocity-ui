import React from 'react';
import Reminders from './Reminders';
import { kanban } from './Reminders.fixtures';
import * as S from './Reminders.styles';

describe('Reminders', () => {
  describe('Kanban', () => {
    it('renders first column', () => {
      const component = shallow(
        <Reminders.Kanban {...kanban} />,
      );

      expect(component.find(S.Column).at(0).props()['data-role']).toBe('service-needed');

      expect(component.find(S.Column).at(0).contains(
        <S.Heading count={kanban.data[0].length}>
          Service needed
        </S.Heading>,
      )).toBeTruthy();
    });

    it('renders second column', () => {
      const component = shallow(
        <Reminders.Kanban {...kanban} />,
      );

      expect(component.find(S.Column).at(1).props()['data-role']).toBe('waiting');
      expect(component.find(S.Column).at(1).contains(
        <S.Heading count={kanban.data[1].length}>
          Waiting
        </S.Heading>,
      )).toBeTruthy();
    });

    it('renders third column', () => {
      const component = shallow(
        <Reminders.Kanban {...kanban} />,
      );

      expect(component.find(S.Column).at(2).props()['data-role']).toBe('in-service');
      expect(component.find(S.Column).at(2).contains(
        <S.Heading count={kanban.data[2].length}>
          In service
        </S.Heading>,
      )).toBeTruthy();
    });

    it('renders fourth column', () => {
      const component = shallow(
        <Reminders.Kanban {...kanban} />,
      );

      expect(component.find(S.Column).at(3).props()['data-role']).toBe('fully-serviced');
      expect(component.find(S.Column).at(3).contains(
        <S.Heading count={kanban.data[3].length}>
          Fully serviced
        </S.Heading>,
      )).toBeTruthy();
    });

    it('shows a ticket count in each column', () => {
      const component = mount(
        <Reminders.Kanban {...kanban} />,
      );

      expect(component.find(S.Heading).at(0)).toHaveStyleRule('content', `"${kanban.data[0].length}"`, { target: '::after' });
      expect(component.find(S.Heading).at(1)).toHaveStyleRule('content', `"${kanban.data[1].length}"`, { target: '::after' });
      expect(component.find(S.Heading).at(2)).toHaveStyleRule('content', `"${kanban.data[2].length}"`, { target: '::after' });
      expect(component.find(S.Heading).at(3)).toHaveStyleRule('content', `"${kanban.data[3].length}"`, { target: '::after' });
    });
  });
});
