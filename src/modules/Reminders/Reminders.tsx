/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { Surfaces } from '~/components';
import * as css from './Reminders.styles';

interface Ticket {
  date: string;
  name: string;
  price: string;
  type: string;
}

interface KanbanProps {
  data: Ticket[][];
}

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
        {COLUMNS.map((columnName, i) => (
          <div
            css={css.kanbanColumn}
            data-role={columnName.split(' ').join('-').toLowerCase()}
            key={columnName.split(' ').join('-').toLowerCase()}
          >
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
                  {tickets[i].map((ticket, j) => (
                    <Draggable
                      draggableId={`${ticket.name.toLowerCase()}-${i}${j}`}
                      index={j}
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${ticket.name.toLowerCase()}-${i}${j}`}
                    >
                      {(providedDrag): ReactElement => (
                        <Surfaces.Card
                          css={css.kanbanTicket}
                          ref={providedDrag.innerRef}
                          {...providedDrag.draggableProps}
                          {...providedDrag.dragHandleProps}
                        >
                          <div css={css.kanbanTicketText}>
                            <span>{ticket.name}</span>
                            <span>{ticket.price}</span>
                          </div>
                          <div css={css.kanbanTicketText}>
                            <span>{ticket.type}</span>
                            <span>{ticket.date}</span>
                          </div>
                        </Surfaces.Card>
                      )}
                    </Draggable>
                  ))}
                  {providedDrop.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};
