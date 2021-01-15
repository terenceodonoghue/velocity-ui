/** @jsx jsx */
import { jsx } from '@emotion/core';
import { NextPage } from 'next';
import {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import Helmet from 'react-helmet';
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { Layout } from '~/components';
import { KanbanProps, Ticket } from '~/types';
import * as css from './reminders.styles';

const COLUMNS = ['Service needed', 'Waiting', 'In service', 'Fully serviced'];

export const move = (
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
  tickets: Ticket[][],
): Ticket[][] => {
  const columns = Array.from(tickets);
  const sourceClone = Array.from(
    tickets[parseInt(droppableSource.droppableId, 10)],
  );
  const destClone = Array.from(
    tickets[parseInt(droppableDestination.droppableId, 10)],
  );

  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  columns[parseInt(droppableSource.droppableId, 10)] = sourceClone;
  columns[parseInt(droppableDestination.droppableId, 10)] = destClone;
  return columns;
};

export const reorder = (
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
  tickets: Ticket[][],
): Ticket[][] => {
  const columns = Array.from(tickets);
  const sourceClone = Array.from(
    tickets[parseInt(droppableSource.droppableId, 10)],
  );

  const [removed] = sourceClone.splice(droppableSource.index, 1);
  sourceClone.splice(droppableDestination.index, 0, removed);

  columns[parseInt(droppableSource.droppableId, 10)] = sourceClone;
  return columns;
};

export const onDragEnd = (
  dragResult: DropResult,
  tickets: Ticket[][],
  setTickets: Dispatch<SetStateAction<Ticket[][]>>,
): void => {
  const { source, destination } = dragResult;
  if (!destination) {
    return;
  }

  if (source.droppableId === destination.droppableId) {
    setTickets(reorder(source, destination, tickets));
  } else {
    setTickets(move(source, destination, tickets));
  }
};

export const Kanban: FunctionComponent<KanbanProps> = ({ data }) => {
  const [tickets, setTickets] = useState(data);

  return (
    <DragDropContext
      onDragEnd={(dragResult): void =>
        onDragEnd(dragResult, tickets, setTickets)
      }
    >
      <div css={css.kanban}>
        {COLUMNS.map((columnName, i) => {
          const columnKey = columnName.split(' ').join('-').toLowerCase();
          return (
            <div css={css.kanbanColumn} data-role={columnKey} key={columnKey}>
              <h3 css={css.kanbanColumnHeading({ length: tickets[i].length })}>
                {columnName}
              </h3>
              <Droppable droppableId={`${i}`}>
                {(providedDrop): ReactElement => (
                  <ul
                    css={css.kanbanTickets}
                    ref={providedDrop.innerRef}
                    {...providedDrop.droppableProps}
                  >
                    {tickets[i].map((ticket, j) => {
                      const draggableKey = `${ticket.name.toLowerCase()}-${ticket.type
                        .split(' ')
                        .join('-')
                        .toLowerCase()}`;
                      return (
                        <Draggable
                          draggableId={draggableKey}
                          index={j}
                          key={draggableKey}
                        >
                          {(providedDrag): ReactElement => (
                            <div
                              css={css.draggable}
                              ref={providedDrag.innerRef}
                              {...providedDrag.draggableProps}
                              {...providedDrag.dragHandleProps}
                            >
                              <Layout.Card css={css.kanbanTicket}>
                                <div css={css.kanbanTicketText}>
                                  <span>{ticket.name}</span>
                                  <span>{ticket.price}</span>
                                </div>
                                <div css={css.kanbanTicketText}>
                                  <span>{ticket.type}</span>
                                  <span>{ticket.date}</span>
                                </div>
                              </Layout.Card>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {providedDrop.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

const RemindersPage: NextPage = () => (
  <>
    <Helmet>
      <title>Velocity | Service Reminders</title>
    </Helmet>
    <Layout.PageHeader heading="Service Reminders" />
    <Layout.Page>
      <Layout.Row>
        <Kanban
          data={[
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
          ]}
        />
      </Layout.Row>
      <Layout.Row>
        <Layout.Card />
        <Layout.CardGroup>
          <Layout.Card fullWidth />
          <Layout.Card fullWidth />
        </Layout.CardGroup>
      </Layout.Row>
    </Layout.Page>
  </>
);

export default RemindersPage;
