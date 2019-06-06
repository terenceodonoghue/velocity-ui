/** @jsx jsx */
import { jsx } from '@emotion/core';
import { number, string } from 'prop-types';
import * as S from './Map.styles';

const Passenger = ({
  avatarUrl, email, interactions, location, name, phone,
}) => (
  <S.Passenger heading="Passenger info">
    <S.FieldSet>
      <S.Details>
        <S.Profile>
          <S.ProfilePicture src={avatarUrl}></S.ProfilePicture>
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

Passenger.propTypes = {
  avatarUrl: string.isRequired,
  email: string.isRequired,
  interactions: number.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  phone: string.isRequired,
};

export default {
  Passenger,
};
