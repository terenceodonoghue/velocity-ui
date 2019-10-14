import React from 'react';
import { act } from 'react-dom/test-utils';
import Reminders, { move, onDragEnd, reorder } from './Reminders';
import { kanban } from './Reminders.fixtures';
import * as S from './Reminders.styles';

describe('Reminders', () => {
  describe('Kanban', () => {
    it('renders first column', () => {
      const component = shallow(<Reminders.Kanban {...kanban} />);

      expect(
        component
          .find(S.Column)
          .at(0)
          .prop('data-role'),
      ).toBe('service-needed');

      expect(
        component
          .find(S.Column)
          .at(0)
          .contains(
            <S.Heading count={kanban.data[0].length}>Service needed</S.Heading>,
          ),
      ).toBeTruthy();
    });

    it('renders second column', () => {
      const component = shallow(<Reminders.Kanban {...kanban} />);

      expect(
        component
          .find(S.Column)
          .at(1)
          .prop('data-role'),
      ).toBe('waiting');
      expect(
        component
          .find(S.Column)
          .at(1)
          .contains(
            <S.Heading count={kanban.data[1].length}>Waiting</S.Heading>,
          ),
      ).toBeTruthy();
    });

    it('renders third column', () => {
      const component = shallow(<Reminders.Kanban {...kanban} />);

      expect(
        component
          .find(S.Column)
          .at(2)
          .prop('data-role'),
      ).toBe('in-service');
      expect(
        component
          .find(S.Column)
          .at(2)
          .contains(
            <S.Heading count={kanban.data[2].length}>In service</S.Heading>,
          ),
      ).toBeTruthy();
    });

    it('renders fourth column', () => {
      const component = shallow(<Reminders.Kanban {...kanban} />);

      expect(
        component
          .find(S.Column)
          .at(3)
          .prop('data-role'),
      ).toBe('fully-serviced');
      expect(
        component
          .find(S.Column)
          .at(3)
          .contains(
            <S.Heading count={kanban.data[3].length}>Fully serviced</S.Heading>,
          ),
      ).toBeTruthy();
    });

    it('shows a ticket count in each column', () => {
      const component = mount(<Reminders.Kanban {...kanban} />);

      expect(component.find(S.Heading).at(0)).toHaveStyleRule(
        'content',
        `"${kanban.data[0].length}"`,
        { target: '::after' },
      );
      expect(component.find(S.Heading).at(1)).toHaveStyleRule(
        'content',
        `"${kanban.data[1].length}"`,
        { target: '::after' },
      );
      expect(component.find(S.Heading).at(2)).toHaveStyleRule(
        'content',
        `"${kanban.data[2].length}"`,
        { target: '::after' },
      );
      expect(component.find(S.Heading).at(3)).toHaveStyleRule(
        'content',
        `"${kanban.data[3].length}"`,
        { target: '::after' },
      );
    });

    it('updates state', () => {
      const component = mount(<Reminders.Kanban {...kanban} />);

      act(() =>
        component
          .children()
          .at(0)
          .invoke('onDragEnd')({
          source: { droppableId: 0, index: 0 },
          destination: { droppableId: 1, index: 1 },
        }),
      );
    });
  });

  describe('move', () => {
    it('moves ticket to a different column', () => {
      const columns = Array.from(kanban.data);
      const result = move(
        { droppableId: 0, index: 0 },
        { droppableId: 1, index: 1 },
        columns,
      );

      expect(result[0][0]).not.toBe(columns[0][0]);
      expect(result[1][1]).toBe(columns[0][0]);
      expect(result[2]).toBe(columns[2]);
      expect(result[3]).toBe(columns[3]);
    });
  });

  describe('reorder', () => {
    it('moves ticket within same column', () => {
      const columns = Array.from(kanban.data);
      const result = reorder(
        { droppableId: 0, index: 0 },
        { droppableId: 0, index: 1 },
        columns,
      );

      expect(result[0][0]).not.toBe(columns[0][0]);
      expect(result[0][1]).toBe(columns[0][0]);
      expect(result[2]).toBe(columns[2]);
      expect(result[3]).toBe(columns[3]);
    });
  });

  describe('onDragEnd', () => {
    const mockCallback = jest.fn();

    afterEach(() => {
      mockCallback.mockReset();
    });

    it('triggers callback when source matches destination', () => {
      const columns = Array.from(kanban.data);

      onDragEnd(
        {
          source: { droppableId: 0, index: 0 },
          destination: { droppableId: 0, index: 1 },
        },
        columns,
        mockCallback,
      );

      expect(mockCallback.mock.calls.length).toBe(1);
    });

    it('triggers callback when source does not match destination', () => {
      const columns = Array.from(kanban.data);

      onDragEnd(
        {
          source: { droppableId: 0, index: 0 },
          destination: { droppableId: 1, index: 1 },
        },
        columns,
        mockCallback,
      );

      expect(mockCallback.mock.calls.length).toBe(1);
    });

    it('does not trigger callback when destination is invalid', () => {
      const columns = Array.from(kanban.data);

      onDragEnd(
        { source: { droppableId: 0, index: 0 }, destination: null },
        columns,
        mockCallback,
      );

      expect(mockCallback.mock.calls.length).toBe(0);
    });
  });
});
