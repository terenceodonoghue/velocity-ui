/** @jsx jsx */
import { jsx } from '@emotion/core';
import { arrayOf, shape, string } from 'prop-types';
import { Container } from 'components';
import * as S from './Reminders.styles';

const Kanban = ({ data }) => (
  <S.Kanban>
    <S.Column data-role="service-needed">
      <S.Heading count={data[0].length}>Service needed</S.Heading>
      <S.Tickets>
        {data[0].map((ticket, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.Ticket key={`${ticket.name.toLowerCase()}-${index}`}>
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
        ))}
      </S.Tickets>
    </S.Column>
    <S.Column data-role="waiting">
      <S.Heading count={data[1].length}>Waiting</S.Heading>
      <S.Tickets>
        {data[1].map((ticket, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.Ticket key={`${ticket.name.toLowerCase()}-${index}`}>
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
        ))}
      </S.Tickets>
    </S.Column>
    <S.Column data-role="in-service">
      <S.Heading count={data[2].length}>In service</S.Heading>
      <S.Tickets>
        {data[2].map((ticket, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.Ticket key={`${ticket.name.toLowerCase()}-${index}`}>
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
        ))}
      </S.Tickets>
    </S.Column>
    <S.Column data-role="fully-serviced">
      <S.Heading count={data[3].length}>Fully serviced</S.Heading>
      <S.Tickets>
        {data[3].map((ticket, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.Ticket key={`${ticket.name.toLowerCase()}-${index}`}>
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
        ))}
      </S.Tickets>
    </S.Column>
  </S.Kanban>
);

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
