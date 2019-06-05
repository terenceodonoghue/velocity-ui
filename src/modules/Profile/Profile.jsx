/** @jsx jsx */
import { jsx } from '@emotion/core';
import { string } from 'prop-types';
import { Button } from 'components';
import * as S from './Profile.styles';

const Sidebar = ({
  bio, email, location, name, phone, srcUrl, title,
}) => (
  <S.Sidebar>
    <S.ProfilePicture src={srcUrl} />
    <S.Name>{name}</S.Name>
    <S.Title>{title}</S.Title>
    <S.Buttons>
      <S.Button>
        <Button.Contained width="100%">Edit profile</Button.Contained>
      </S.Button>
      <S.Button>
        <Button.Outlined width="100%">Change status</Button.Outlined>
      </S.Button>
    </S.Buttons>
    <S.Rule />
    <dl>
      <S.DetailsTerm>Role</S.DetailsTerm>
      <S.DetailsDescription>Administrator, Moderator</S.DetailsDescription>
      <S.DetailsTerm>E-mail</S.DetailsTerm>
      <S.DetailsDescription>{email}</S.DetailsDescription>
      <S.DetailsTerm>Phone</S.DetailsTerm>
      <S.DetailsDescription>{phone}</S.DetailsDescription>
      <S.DetailsTerm>Twitter</S.DetailsTerm>
      <S.DetailsDescription>@invisionapp</S.DetailsDescription>
      <S.DetailsTerm>Location</S.DetailsTerm>
      <S.DetailsDescription>{location}</S.DetailsDescription>
      <S.DetailsTerm>Bio</S.DetailsTerm>
      <S.DetailsDescription>{bio}</S.DetailsDescription>
    </dl>
  </S.Sidebar>
);

Sidebar.propTypes = {
  bio: string.isRequired,
  email: string.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  phone: string.isRequired,
  srcUrl: string.isRequired,
  title: string.isRequired,
};

export default {
  Sidebar,
};
