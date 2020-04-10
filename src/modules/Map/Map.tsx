/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Avatars, Selectable, Surfaces } from '../../components';
import * as css from './Map.styles';

type Address = {
  streetAddress: string;
  suburb: string;
};

interface PassengerProps {
  email: string;
  interactions: number;
  location: string;
  name: string;
  phone: string;
  src: string;
}

interface TripProps {
  distance: number;
  energy: number;
  from: Address;
  price: number;
  time: number;
  to: Address;
}

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
  <Surfaces.Card css={css.passenger} heading="Passenger info">
    <div css={css.passengerContent}>
      <div css={css.passengerDetails}>
        <div css={css.passengerProfile}>
          <Avatars.Round css={css.passengerAvatar} src={src} />
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
  </Surfaces.Card>
);

export const Trip: FunctionComponent<TripProps> = ({
  distance,
  energy,
  from,
  price,
  time,
  to,
}) => (
  <Surfaces.Card css={css.trip}>
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
  </Surfaces.Card>
);
