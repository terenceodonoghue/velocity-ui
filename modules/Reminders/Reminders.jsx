/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Container } from 'components';
import * as S from './Reminders.styles';


const labels = [
  'Service needed',
  'Waiting',
  'In service',
  'Fully serviced',
];

const Kanban = ({ data }) => {
  const [tickets, setTickets] = useState(data);

  const move = (source, destination, droppableSource, droppableDestination) => {
    const columns = Array.from(tickets);
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    columns[parseInt(droppableSource.droppableId, 10)] = sourceClone;
    columns[parseInt(droppableDestination.droppableId, 10)] = destClone;
    setTickets(columns);
  };

  const reorder = (source, droppableSource, droppableDestination) => {
    const columns = Array.from(tickets);
    const sourceClone = Array.from(source);

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    sourceClone.splice(droppableDestination.index, 0, removed);

    columns[parseInt(droppableSource.droppableId, 10)] = sourceClone;
    setTickets(columns);
  };

  const onDragEnd = (dragResult) => {
    const { source, destination } = dragResult;
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      reorder(
        tickets[parseInt(source.droppableId, 10)],
        source,
        destination,
      );
    } else {
      move(
        tickets[parseInt(source.droppableId, 10)],
        tickets[parseInt(destination.droppableId, 10)],
        source,
        destination,
      );
    }
  };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.Kanban>
        {labels.map((label, i) => (
          <S.Column data-role={label.split(' ').join('-').toLowerCase()} key={label.split(' ').join('-').toLowerCase()}>
            <S.Heading count={tickets[i].length}>{label}</S.Heading>
            <Droppable droppableId={`${i}`}>
              {
                providedDrop => (
                  <S.Tickets
                    ref={providedDrop.innerRef}
                    {...providedDrop.droppableProps}
                  >
                    {tickets[i].map((ticket, j) => (
                      <Draggable draggableId={`${ticket.name.toLowerCase()}-${i}${j}`} index={j} key={`${ticket.name.toLowerCase()}-${i}${j}`}>
                        {
                        providedDrag => (
                          <S.Ticket
                            ref={providedDrag.innerRef}
                            {...providedDrag.draggableProps}
                            {...providedDrag.dragHandleProps}
                          >
                            <Container.Card>
                              <S.Row>
                                <span>{ticket.name}</span>
                                <span>{ticket.price}</span>
                              </S.Row>
                              <S.Row>
                                <span>{ticket.type}</span>
                                <span>{ticket.date}</span>
                              </S.Row>
                            </Container.Card>
                          </S.Ticket>
                        )
                      }
                      </Draggable>
                    ))}
                    {providedDrop.placeholder}
                  </S.Tickets>
                )
              }
            </Droppable>
          </S.Column>
        ))}
      </S.Kanban>
    </DragDropContext>
  );
};

Kanban.propTypes = {
  data: arrayOf(
    arrayOf(shape({
      date: string.isRequired,
      name: string.isRequired,
      price: string.isRequired,
      type: string.isRequired,
    }).isRequired).isRequired,
  ).isRequired,
};

export default {
  Kanban,
};
