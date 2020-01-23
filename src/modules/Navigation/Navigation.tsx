/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { ComponentType, FunctionComponent, useState } from 'react';
import {
  Avatars,
  Buttons,
  Icons,
  Selectable,
  Showable,
  Theme,
} from '../../components';
import { IconProps } from '../../components/Icon/Icon';
import * as css from './Navigation.styles';

interface MenuProps {
  name: string;
  src: string;
}

interface NavListItemProps extends Selectable, Showable {
  icon: ComponentType<IconProps>;
  label: string;
}

const Drawer: FunctionComponent<Showable> = ({ children, show }) => (
  <div css={css.drawer({ show })}>{children}</div>
);

const MenuHeader: FunctionComponent<Showable> = ({ children, show }) => (
  <div css={css.menuHeader({ show })}>{children}</div>
);

const NavListItem: FunctionComponent<NavListItemProps & Showable> = ({
  icon: Icon,
  label,
  selected,
  show,
}) => {
  const theme = useTheme<Theme>();

  return (
    <li css={css.navListItem({ selected })}>
      <Icon theme={theme} title={label} />
      <span css={css.navListItemContent({ selected, show })}>{label}</span>
    </li>
  );
};

export const Menu: FunctionComponent<MenuProps> = ({ name, src }) => {
  const [show, setShow] = useState(false);

  return (
    <Drawer show={show}>
      <Buttons.Text css={css.button} onClick={(): void => setShow(!show)}>
        <img alt="Menu" src="./menu.svg" />
      </Buttons.Text>
      <MenuHeader show={show}>
        <Avatars.Square src={src} alt="Welcome" height="32" width="32" />
        <div css={css.menuHeaderContent}>
          <span>Welcome</span>
          <span css={css.name}>{name}</span>
        </div>
      </MenuHeader>
      <nav>
        <ul css={css.navList}>
          <NavListItem
            icon={Icons.Dashboard}
            label="Overview"
            selected
            show={show}
          />
          <NavListItem icon={Icons.Analytics} label="Analytics" show={show} />
          <NavListItem icon={Icons.Vehicles} label="Vehicles" show={show} />
          <NavListItem icon={Icons.Service} label="Service" show={show} />
          <NavListItem icon={Icons.Map} label="Map" show={show} />
          <NavListItem icon={Icons.Chat} label="Chat" show={show} />
          <NavListItem icon={Icons.Settings} label="Settings" show={show} />
        </ul>
      </nav>
    </Drawer>
  );
};
