/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { string } from 'prop-types';
import { Avatars, Icons } from '../../components';
import * as S from './Navigation.styles';

export const Menu = ({ avatarSrc, name }) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Menu open={open}>
      <S.MenuButton onClick={() => setOpen(!open)}>
        <img alt="Menu" src="./menu.svg" />
      </S.MenuButton>
      <S.Welcome show={open}>
        <Avatars.Square src={avatarSrc} alt="Welcome" height="32" width="32" />
        <S.WelcomeText>
          <span>Welcome</span>
          <S.Name>{name}</S.Name>
        </S.WelcomeText>
      </S.Welcome>
      <nav>
        <S.NavList>
          <S.NavItem selected>
            <Icons.Dashboard title="Overview" />
            <S.NavLabel show={open} selected>
              Overview
            </S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <Icons.Analytics title="Analytics" />
            <S.NavLabel show={open}>Analytics</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <Icons.Vehicles title="Vehicles" />
            <S.NavLabel show={open}>Vehicles</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <Icons.Service title="Service" />
            <S.NavLabel show={open}>Service</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <Icons.Map title="Map" />
            <S.NavLabel show={open}>Map</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <Icons.Chat title="Chat" />
            <S.NavLabel show={open}>Chat</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <Icons.Settings title="Settings" />
            <S.NavLabel show={open}>Settings</S.NavLabel>
          </S.NavItem>
        </S.NavList>
      </nav>
    </S.Menu>
  );
};

Menu.propTypes = {
  avatarSrc: string.isRequired,
  name: string.isRequired,
};
