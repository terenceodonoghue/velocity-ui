/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'components';
import * as S from './Navigation.styles';

const Menu = ({ avatarSrc, name }) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Menu open={open}>
      <S.MenuButton onClick={() => setOpen(!open)}>
        <img alt="Menu" src="./menu.svg" />
      </S.MenuButton>
      <S.Welcome show={open}>
        <Avatar.Square src={avatarSrc} alt="Welcome" height="32" width="32"></Avatar.Square>
        <S.WelcomeText>
          <span>Welcome</span>
          <S.Name>{name}</S.Name>
        </S.WelcomeText>
      </S.Welcome>
      <nav>
        <S.NavList>
          <S.NavItem selected>
            <img alt="Overview" src="./overview.svg" />
            <S.NavLabel show={open} selected>Overview</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <img alt="Analytics" src="./analytics.svg" />
            <S.NavLabel show={open}>Analytics</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <img alt="Vehicles" src="./vehicles.svg" />
            <S.NavLabel show={open}>Vehicles</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <img alt="Service" src="./service.svg" />
            <S.NavLabel show={open}>Service</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <img alt="Map" src="./map.svg" />
            <S.NavLabel show={open}>Map</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <img alt="Chat" src="./chat.svg" />
            <S.NavLabel show={open}>Chat</S.NavLabel>
          </S.NavItem>
          <S.NavItem>
            <img alt="Settings" src="./settings.svg" />
            <S.NavLabel show={open}>Settings</S.NavLabel>
          </S.NavItem>
        </S.NavList>
      </nav>
    </S.Menu>
  );
};

Menu.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default {
  Menu,
};
