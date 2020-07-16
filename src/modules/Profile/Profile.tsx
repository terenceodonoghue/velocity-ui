/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Avatars, Buttons, Surfaces } from '~/components';
import * as css from './Profile.styles';

interface SidebarProps {
  bio: string;
  email: string;
  jobTitle: string;
  location: string;
  name: string;
  phone: string;
  roles: string;
  src: string;
}

export const Sidebar: FunctionComponent<SidebarProps> = ({
  bio,
  email,
  jobTitle,
  location,
  name,
  phone,
  roles,
  src,
}) => (
  <Surfaces.Card css={css.sidebar}>
    <Avatars.Round css={css.sidebarAvatar} src={src} />
    <h2 css={css.sidebarName}>{name}</h2>
    <h3 css={css.sidebarJobTitle}>{jobTitle}</h3>
    <div css={css.sidebarButtons}>
      <Buttons.Contained css={css.sidebarButton}>
        Edit profile
      </Buttons.Contained>
      <Buttons.Outlined css={css.sidebarButton}>Change status</Buttons.Outlined>
    </div>
    <hr css={css.sidebarDivider} />
    <dl>
      <dt css={css.sidebarFieldLabel}>Role</dt>
      <dd css={css.sidebarFieldValue}>{roles}</dd>
      <dt css={css.sidebarFieldLabel}>E-mail</dt>
      <dd css={css.sidebarFieldValue}>{email}</dd>
      <dt css={css.sidebarFieldLabel}>Phone</dt>
      <dd css={css.sidebarFieldValue}>{phone}</dd>
      <dt css={css.sidebarFieldLabel}>Twitter</dt>
      <dd css={css.sidebarFieldValue}>@invisionapp</dd>
      <dt css={css.sidebarFieldLabel}>Location</dt>
      <dd css={css.sidebarFieldValue}>{location}</dd>
      <dt css={css.sidebarFieldLabel}>Bio</dt>
      <dd css={css.sidebarFieldValue}>{bio}</dd>
    </dl>
  </Surfaces.Card>
);
