/* eslint-disable import/prefer-default-export */
import React from 'react';
import { string } from 'prop-types';
import * as S from './Profile.styles';

export const Sidebar = ({
  avatarSrc,
  bio,
  email,
  location,
  name,
  phone,
  roles,
  title,
}) => (
  <S.Sidebar>
    <S.ProfilePicture src={avatarSrc} />
    <S.Name>{name}</S.Name>
    <S.Title>{title}</S.Title>
    <S.ButtonGroup>
      <S.EditButton>Edit profile</S.EditButton>
      <S.StatusButton>Change status</S.StatusButton>
    </S.ButtonGroup>
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
  avatarSrc: string.isRequired,
  bio: string.isRequired,
  email: string.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  phone: string.isRequired,
  roles: string.isRequired,
  title: string.isRequired,
};
