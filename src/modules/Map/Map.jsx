/** @jsx jsx */
import { jsx } from '@emotion/core';
import { number, shape, string } from 'prop-types';
import * as S from './Map.styles';

const Passenger = ({
  avatarSrc, email, interactions, location, name, phone,
}) => (
  <S.Passenger heading="Passenger info">
    <S.FieldSet>
      <S.Details>
        <S.Profile>
          <S.ProfilePicture src={avatarSrc}></S.ProfilePicture>
          <S.ProfileText>
            <S.Name>{name}</S.Name>
            <S.Interactions>{`${interactions} interaction${interactions === 1 ? '' : 's'}`}</S.Interactions>
          </S.ProfileText>
        </S.Profile>
        <S.DetailsList>
          <S.Label>Email</S.Label>
          <S.Value>{email}</S.Value>
          <S.Label>Phone</S.Label>
          <S.Value>{phone}</S.Value>
          <S.Label>Location</S.Label>
          <S.Value>{location}</S.Value>
        </S.DetailsList>
      </S.Details>
      <S.Payment>
        <S.PaymentType>
          <S.PaymentLogo><img alt="PayPal" src="./paypal.png" /></S.PaymentLogo>
        </S.PaymentType>
        <S.PaymentType>
          <S.PaymentLogo active><img alt="Visa" src="./visa.png" /></S.PaymentLogo>
        </S.PaymentType>
        <S.PaymentType>
          <S.PaymentLogo><img alt="Mastercard" src="./mastercard.png" /></S.PaymentLogo>
        </S.PaymentType>
        <S.PaymentType>
          <S.PaymentLogo><img alt="Apple Pay" src="./applepay.png" /></S.PaymentLogo>
        </S.PaymentType>
      </S.Payment>
    </S.FieldSet>
  </S.Passenger>
);

const Trip = ({
  distance, energy, from, price, time, to,
}) => (
  <S.Trip>
    {from.suburb}
    {from.streetAddress}
    {to.suburb}
    {to.streetAddress}
    <S.Stats>
      <S.Stat>
        <p>
          {distance}
          {' '}
          km
        </p>
        <p>Distance</p>
      </S.Stat>
      <S.Stat>
        <p>
          {time}
          {' '}
          min
        </p>
        <p>Time</p>
      </S.Stat>
      <S.Stat>
        <p>
          $
          {price}
        </p>
        <p>Price</p>
      </S.Stat>
      <S.Stat>
        <p>
          {energy}
          {' '}
          kWh
        </p>
        <p>Energy</p>
      </S.Stat>
    </S.Stats>
  </S.Trip>
);

Passenger.propTypes = {
  avatarSrc: string.isRequired,
  email: string.isRequired,
  interactions: number.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  phone: string.isRequired,
};

Trip.propTypes = {
  distance: number.isRequired,
  energy: number.isRequired,
  from: shape({ streetAddress: string, suburb: string }).isRequired,
  price: number.isRequired,
  time: number.isRequired,
  to: shape({ streetAddress: string, suburb: string }).isRequired,
};

export default {
  Passenger,
  Trip,
};
