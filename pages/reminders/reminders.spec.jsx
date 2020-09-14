/** @jsx jsx */
import { jsx } from '@emotion/core';
import { act } from 'react-dom/test-utils';
import { Kanban, move, onDragEnd, reorder } from './index';

const fixtures = {
  kanban: {
    data: [
      [
        {
          date: 'June 12',
          name: 'Spire',
          price: '$233',
          type: 'Tire replacement',
        },
        {
          date: 'May 2',
          name: 'Eos',
          price: '$120',
          type: 'Engine check-up',
        },
        {
          date: 'June 6',
          name: 'Eagle',
          price: '$180',
          type: 'Tire replacement',
        },
        {
          date: 'June 12',
          name: 'Bebop',
          price: '$1400',
          type: 'Monthly service',
        },
      ],
      [
        {
          date: 'June 3',
          name: 'Expedition',
          price: '$766',
          type: 'Tire replacement',
        },
        {
          date: 'June 12',
          name: 'Bliss',
          price: '$199',
          type: 'Engine check-up',
        },
        {
          date: 'June 5',
          name: 'Vigor',
          price: '$690',
          type: 'Monthly service',
        },
      ],
      [
        {
          date: 'June 4',
          name: 'Scorpion',
          price: '$430',
          type: 'Monthly service',
        },
        {
          date: 'June 22',
          name: 'Resolve',
          price: '$560',
          type: 'Tire replacement',
        },
      ],
      [
        {
          date: 'June 24',
          name: 'Empire',
          price: '$430',
          type: 'Monthly service',
        },
        {
          date: 'June 27',
          name: 'Eos',
          price: '$560',
          type: 'Tire replacement',
        },
        {
          date: 'June 28',
          name: 'Spire',
          price: '$430',
          type: 'Monthly service',
        },
        {
          date: 'June 29',
          name: 'Nebula',
          price: '$560',
          type: 'Tire replacement',
        },
      ],
    ],
  },
};

jest.mock('react-beautiful-dnd', () => ({
  Droppable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {},
    ),
  Draggable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {},
    ),
  DragDropContext: ({ children }) => children,
}));

describe('Reminders', () => {
  describe('Kanban', () => {
    it('renders columns with headings', () => {
      const component = renderer.create(
        withTheme(<Kanban {...fixtures.kanban} />),
      );

      const headings = component.root.findAllByType('h3');

      expect(headings[0].props.children).toBe('Service needed');

      expect(headings[1].props.children).toBe('Waiting');

      expect(headings[2].props.children).toBe('In service');

      expect(headings[3].props.children).toBe('Fully serviced');
    });

    it('shows a ticket count in each column', () => {
      const component = mount(withTheme(<Kanban {...fixtures.kanban} />));

      expect(component.find('h3').at(0)).toHaveStyleRule(
        'content',
        `"${fixtures.kanban.data[0].length}"`,
        { target: '::after' },
      );
      expect(component.find('h3').at(1)).toHaveStyleRule(
        'content',
        `"${fixtures.kanban.data[1].length}"`,
        { target: '::after' },
      );
      expect(component.find('h3').at(2)).toHaveStyleRule(
        'content',
        `"${fixtures.kanban.data[2].length}"`,
        { target: '::after' },
      );
      expect(component.find('h3').at(3)).toHaveStyleRule(
        'content',
        `"${fixtures.kanban.data[3].length}"`,
        { target: '::after' },
      );
    });

    it('updates state', () => {
      const component = mount(withTheme(<Kanban {...fixtures.kanban} />))
        .children()
        .children();

      act(() =>
        component.children().at(1).invoke('onDragEnd')({
          source: { droppableId: 0, index: 0 },
          destination: { droppableId: 1, index: 1 },
        }),
      );
    });
  });

  describe('move', () => {
    it('moves ticket to a different column', () => {
      const columns = Array.from(fixtures.kanban.data);
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
      const columns = Array.from(fixtures.kanban.data);
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
      const columns = Array.from(fixtures.kanban.data);

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
      const columns = Array.from(fixtures.kanban.data);

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
      const columns = Array.from(fixtures.kanban.data);

      onDragEnd(
        { source: { droppableId: 0, index: 0 }, destination: null },
        columns,
        mockCallback,
      );

      expect(mockCallback.mock.calls.length).toBe(0);
    });
  });
});
