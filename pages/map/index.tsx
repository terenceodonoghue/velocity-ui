/** @jsx jsx */
import { jsx } from '@emotion/core';
import faker from 'faker';
import { NextPage } from 'next';
import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Avatar, Layout } from '~/components';
import { PassengerProps, Selectable, TripProps } from '~/types';
import * as css from './map.styles';

const fixtures = {
  avatar: faker.image.avatar(),
  city: faker.address.city(),
  email: faker.internet.exampleEmail(),
  name: faker.name.findName(),
  phone: faker.phone.phoneNumberFormat(),
  state: faker.address.stateAbbr(),
};

const PaymentLogo: FunctionComponent<Selectable> = ({ children, selected }) => (
  <div css={css.paymentLogo({ selected })}>{children}</div>
);

export const Passenger: FunctionComponent<PassengerProps> = ({
  email,
  interactions,
  location,
  name,
  phone,
  src,
}) => (
  <Layout.Card heading="Passenger info" size={1.2474}>
    <div css={css.passengerContent}>
      <div css={css.passengerDetails}>
        <div css={css.passengerProfile}>
          <Avatar
            alt={faker.name.findName()}
            css={css.passengerAvatar}
            round
            size={48}
            src={src}
          />
          <div css={css.passengerBio}>
            <p css={css.passengerName}>{name}</p>
            <p css={css.passengerInteractions}>
              {`${interactions} interaction${interactions === 1 ? '' : 's'}`}
            </p>
          </div>
        </div>
        <dl css={css.passengerFields}>
          <dt css={css.passengerFieldLabel}>Email</dt>
          <dd css={css.passengerFieldValue}>{email}</dd>
          <dt css={css.passengerFieldLabel}>Phone</dt>
          <dd css={css.passengerFieldValue}>{phone}</dd>
          <dt css={css.passengerFieldLabel}>Location</dt>
          <dd css={css.passengerFieldValue}>{location}</dd>
        </dl>
      </div>
      <div css={css.passengerPayment}>
        <div css={css.passengerPaymentType}>
          <PaymentLogo>
            <img alt="PayPal" src="./paypal.png" />
          </PaymentLogo>
        </div>
        <div css={css.passengerPaymentType}>
          <PaymentLogo selected>
            <img alt="Visa" src="./visa.png" />
          </PaymentLogo>
        </div>
        <div css={css.passengerPaymentType}>
          <PaymentLogo>
            <img alt="Mastercard" src="./mastercard.png" />
          </PaymentLogo>
        </div>
        <div css={css.passengerPaymentType}>
          <PaymentLogo>
            <img alt="Apple Pay" src="./applepay.png" />
          </PaymentLogo>
        </div>
      </div>
    </div>
  </Layout.Card>
);

export const Trip: FunctionComponent<TripProps> = ({
  distance,
  energy,
  from,
  price,
  time,
  to,
}) => (
  <Layout.Card css={css.trip} fullWidth>
    <div css={css.tripIcons}>
      <div css={css.tripIcon}>
        <img alt="From" src="./check-blue.svg" />
      </div>
      <span css={css.tripIconDivider} />
      <div css={css.tripIcon}>
        <img alt="To" src="./marker-green.svg" />
      </div>
    </div>
    <div css={css.tripDetails}>
      <div css={css.tripAddress}>
        <p>{from.suburb}</p>
        <p>{from.streetAddress}</p>
      </div>
      <div css={css.tripAddress}>
        <p>{to.suburb}</p>
        <p>{to.streetAddress}</p>
      </div>
    </div>
    <div css={css.tripMetrics}>
      <div css={css.tripMetric}>
        <p>
          {distance}
          &nbsp;km
        </p>
        <p>Distance</p>
      </div>
      <div css={css.tripMetric}>
        <p>
          {time}
          &nbsp;min
        </p>
        <p>Time</p>
      </div>
      <div css={css.tripMetric}>
        <p>${price.toFixed(2)}</p>
        <p>Price</p>
      </div>
      <div css={css.tripMetric}>
        <p>
          {energy}
          &nbsp;kWh
        </p>
        <p>Energy</p>
      </div>
    </div>
  </Layout.Card>
);

const MapPage: NextPage = () => {
  return (
    <>
      <Helmet>
        <title>Velocity | Map</title>
      </Helmet>
      <Layout.Page>
        <Layout.Row>
          <Passenger
            email={fixtures.email}
            interactions={4}
            location={`${fixtures.city}, ${fixtures.state}`}
            name={fixtures.name}
            phone={`+${fixtures.phone}`}
            src={fixtures.avatar}
          />
          <Layout.CardGroup>
            <Trip
              distance={12.3}
              energy={12.4}
              from={{
                streetAddress: '37-27 74th Street',
                suburb: 'Jackson Heights',
              }}
              price={34.2}
              time={42}
              to={{
                streetAddress: '81 Gate St Brooklyn',
                suburb: 'Greenpoint',
              }}
            />
            <Layout.Card />
          </Layout.CardGroup>
        </Layout.Row>
      </Layout.Page>
    </>
  );
};

export default MapPage;
