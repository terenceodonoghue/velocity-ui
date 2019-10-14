import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as S from './Reminders.styles';

const labels = ['Service needed', 'Waiting', 'In service', 'Fully serviced'];

export const move = (droppableSource, droppableDestination, tickets) => {
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

export const reorder = (droppableSource, droppableDestination, tickets) => {
  const columns = Array.from(tickets);
  const sourceClone = Array.from(
    tickets[parseInt(droppableSource.droppableId, 10)],
  );

  const [removed] = sourceClone.splice(droppableSource.index, 1);
  sourceClone.splice(droppableDestination.index, 0, removed);

  columns[parseInt(droppableSource.droppableId, 10)] = sourceClone;
  return columns;
};

export const onDragEnd = (dragResult, tickets, setTickets) => {
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

const Kanban = ({ data }) => {
  const [tickets, setTickets] = useState(data);

  return (
    <DragDropContext
      onDragEnd={(dragResult) => onDragEnd(dragResult, tickets, setTickets)}
    >
      <S.Kanban>
        {labels.map((label, i) => (
          <S.Column
            data-role={label
              .split(' ')
              .join('-')
              .toLowerCase()}
            key={label
              .split(' ')
              .join('-')
              .toLowerCase()}
          >
            <S.Heading count={tickets[i].length}>{label}</S.Heading>
            <Droppable droppableId={`${i}`}>
              {(providedDrop) => (
                <S.Tickets
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
                      {(providedDrag) => (
                        <S.Ticket
                          as="li"
                          ref={providedDrag.innerRef}
                          {...providedDrag.draggableProps}
                          {...providedDrag.dragHandleProps}
                        >
                          <S.Row>
                            <span>{ticket.name}</span>
                            <span>{ticket.price}</span>
                          </S.Row>
                          <S.Row>
                            <span>{ticket.type}</span>
                            <span>{ticket.date}</span>
                          </S.Row>
                        </S.Ticket>
                      )}
                    </Draggable>
                  ))}
                  {providedDrop.placeholder}
                </S.Tickets>
              )}
            </Droppable>
          </S.Column>
        ))}
      </S.Kanban>
    </DragDropContext>
  );
};

Kanban.propTypes = {
  data: arrayOf(
    arrayOf(
      shape({
        date: string.isRequired,
        name: string.isRequired,
        price: string.isRequired,
        type: string.isRequired,
      }).isRequired,
    ).isRequired,
  ).isRequired,
};

export default {
  Kanban,
};
