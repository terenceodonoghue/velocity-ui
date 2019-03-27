/** @jsx jsx */
import { jsx } from '@emotion/core';
import { string } from 'prop-types';
import { Avatar, Button, Container } from 'components';
import * as S from './Profile.styles';

const Sidebar = ({
  avatarSrc, bio, email, location, name, phone, title,
}) => (
  <S.Sidebar>
    <Container.Card>
      <S.Avatar>
        <Avatar.Round src={avatarSrc} height="140" width="140" />
      </S.Avatar>
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
      <S.DetailsList>
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
      </S.DetailsList>
    </Container.Card>
  </S.Sidebar>
);

Sidebar.propTypes = {
  avatarSrc: string.isRequired,
  bio: string.isRequired,
  email: string.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  phone: string.isRequired,
  title: string.isRequired,
};

export default {
  Sidebar,
};
