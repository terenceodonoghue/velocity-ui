/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import faker from 'faker';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { Avatar, Button, Global, Icon, Layout } from '~/components';
import { DrawerProps, NavListItemProps, SidebarProps, Theme } from '~/types';
import * as css from './_app.styles';

const fixtures = {
  avatar: faker.image.avatar(),
  city: faker.address.city(),
  email: faker.internet.exampleEmail(),
  name: faker.name.findName(),
  phone: faker.phone.phoneNumberFormat(),
  jobTitle: faker.name.jobTitle(),
  sentences: faker.lorem.sentences(),
  state: faker.address.stateAbbr(),
};

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
        <Avatar alt="Welcome" size={32} src={src} />
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
            href="/reminders"
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

export const Sidebar: FunctionComponent<SidebarProps> = ({
  bio,
  email,
  jobTitle,
  location,
  name,
  phone,
  roles,
  show,
  src,
}) => (
  <Layout.Card css={css.sidebar({ show })}>
    <div css={css.sidebarContent({ show })}>
      <Avatar
        alt={fixtures.name}
        css={css.sidebarAvatar}
        round
        size={140}
        src={src}
      />
      <h2 css={css.sidebarName}>{name}</h2>
      <h3 css={css.sidebarJobTitle}>{jobTitle}</h3>
      <div css={css.sidebarButtons}>
        <Button.Contained css={css.sidebarButton}>
          Edit profile
        </Button.Contained>
        <Button.Outlined css={css.sidebarButton}>Change status</Button.Outlined>
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
    </div>
  </Layout.Card>
);

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const [showSidebar, toggleSidebar] = useState(false);

  return (
    <Global.ThemeProvider>
      <Global.GitHubCorner />
      <Global.Styles />
      <Layout.AppBar>
        <Button.Icon onClick={() => toggleSidebar(!showSidebar)}>
          <Avatar
            alt={fixtures.name}
            css={css.avatar}
            round
            size={40}
            src={fixtures.avatar}
          />
        </Button.Icon>
      </Layout.AppBar>
      <Drawer name={fixtures.name} src={fixtures.avatar} />
      <main>
        <Component {...pageProps} />
      </main>
      <Sidebar
        bio={fixtures.sentences}
        email={fixtures.email}
        jobTitle={fixtures.jobTitle}
        location={`${fixtures.city}, ${fixtures.state}`}
        name={fixtures.name}
        phone={`+${fixtures.phone}`}
        roles="Administrator, Moderator"
        show={showSidebar}
        src={fixtures.avatar}
      />
    </Global.ThemeProvider>
  );
};

export default App;
