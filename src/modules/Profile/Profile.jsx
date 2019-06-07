/** @jsx jsx */
import { jsx } from '@emotion/core';
import { string } from 'prop-types';
import * as S from './Profile.styles';

const Sidebar = ({
  bio, email, location, name, phone, roles, srcUrl, title,
}) => (
  <S.Sidebar>
    <S.ProfilePicture src={srcUrl} />
    <S.Name>{name}</S.Name>
    <S.Title>{title}</S.Title>
    <S.Buttons>
      <S.EditButton>
        Edit profile
      </S.EditButton>
      <S.StatusButton>
        Change status
      </S.StatusButton>
    </S.Buttons>
    <S.Rule />
    <dl>
      <S.Label>Role</S.Label>
      <S.Value>{roles}</S.Value>
      <S.Label>E-mail</S.Label>
      <S.Value>{email}</S.Value>
      <S.Label>Phone</S.Label>
      <S.Value>{phone}</S.Value>
      <S.Label>Twitter</S.Label>
      <S.Value>@invisionapp</S.Value>
      <S.Label>Location</S.Label>
      <S.Value>{location}</S.Value>
      <S.Label>Bio</S.Label>
      <S.Value>{bio}</S.Value>
    </dl>
  </S.Sidebar>
);

Sidebar.propTypes = {
  bio: string.isRequired,
  email: string.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  phone: string.isRequired,
  roles: string.isRequired,
  srcUrl: string.isRequired,
  title: string.isRequired,
};

export default {
  Sidebar,
};
