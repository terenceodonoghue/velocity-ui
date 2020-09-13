/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import faker from 'faker';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { Avatar, Button, Global, Icon, Layout } from '~/components';
import { DrawerProps, NavListItemProps, Theme } from '~/types';
import * as css from './_app.styles';

const NavListItem: FunctionComponent<NavListItemProps> = ({
  href,
  icon: NavIcon,
  label,
  show,
}) => {
  const router = useRouter();
  const theme = useTheme<Theme>();

  const selected = router.pathname === href;

  return (
    <Link href={href}>
      <li css={css.navListItem({ selected })}>
        <NavIcon theme={theme} title={label} />
        <span css={css.navListItemContent({ selected, show })}>{label}</span>
      </li>
    </Link>
  );
};

const Drawer: FunctionComponent<DrawerProps> = ({ name, src }) => {
  const [show, setShow] = useState(false);

  return (
    <div css={css.drawer({ show })}>
      <Button.Text css={css.button} onClick={(): void => setShow(!show)}>
        <img alt="Menu" src="./menu.svg" />
      </Button.Text>
      <div css={css.menuHeader({ show })}>
        <Avatar src={src} alt="Welcome" height="32" width="32" />
        <div css={css.menuHeaderContent}>
          <span>Welcome</span>
          <span css={css.name}>{name}</span>
        </div>
      </div>
      <nav>
        <ul css={css.navList}>
          <NavListItem
            href="/"
            icon={Icon.Dashboard}
            label="Overview"
            show={show}
          />
          <NavListItem
            href="/analytics"
            icon={Icon.Analytics}
            label="Analytics"
            show={show}
          />
          <NavListItem
            href="/vehicles"
            icon={Icon.Vehicles}
            label="Vehicles"
            show={show}
          />
          <NavListItem
            href="/service"
            icon={Icon.Service}
            label="Service"
            show={show}
          />
          <NavListItem href="/map" icon={Icon.Map} label="Map" show={show} />
          <NavListItem href="/chat" icon={Icon.Chat} label="Chat" show={show} />
          <NavListItem
            href="/settings"
            icon={Icon.Settings}
            label="Settings"
            show={show}
          />
        </ul>
      </nav>
    </div>
  );
};

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Global.ThemeProvider>
    <Global.Styles />
    <Layout.AppBar />
    <Drawer name={faker.name.findName()} src={faker.image.avatar()} />
    <main>
      <Component {...pageProps} />
    </main>
  </Global.ThemeProvider>
);

export default App;
