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

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      // TODO
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.Kanban>
        {columns.map((column, i) => (
          <S.Column data-role={column.split(' ').join('-').toLowerCase()} key={column.split(' ').join('-').toLowerCase()}>
            <S.Heading count={tickets[i].length}>{column}</S.Heading>
            <Droppable droppableId={column.split(' ').join('-').toLowerCase()}>
              {
                (provided, snapshot) => (
                  <S.Tickets
                    ref={provided.innerRef}
                  >
                    {tickets[i].map((ticket, j) => (
                      <Draggable draggableId={`${ticket.name.toLowerCase()}-${j}`} index={j} key={`${ticket.name.toLowerCase()}-${j}`}>
                        {
                        (provided, snapshot) => (
                          <S.Ticket
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
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
