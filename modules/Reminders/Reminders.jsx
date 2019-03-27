/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Container } from 'components';
import * as S from './Reminders.styles';


const columns = [
  'Service needed',
  'Waiting',
  'In service',
  'Fully serviced',
];

const Kanban = ({ data }) => {
  const [tickets] = useState(data);

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    tickets[parseInt(droppableSource.droppableId, 10)] = sourceClone;
    tickets[parseInt(droppableDestination.droppableId, 10)] = destClone;
  };

  const onDragEnd = (dragResult) => {
    const { source, destination } = dragResult;
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // TODO
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
        {columns.map((column, i) => (
          <S.Column data-role={column.split(' ').join('-').toLowerCase()} key={column.split(' ').join('-').toLowerCase()}>
            <S.Heading count={tickets[i].length}>{column}</S.Heading>
            <Droppable droppableId={`${i}`}>
              {
                providedDrop => (
                  <S.Tickets
                    ref={providedDrop.innerRef}
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
