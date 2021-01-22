import React, { FunctionComponent, useEffect, useState } from 'react';
import faker from 'faker';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppBar from '~/components/core/AppBar';
import Avatar from '~/components/core/Avatar';
import Drawer from '~/components/core/Drawer';
import Flex from '~/components/core/Flex';
import Global from '~/components/core/Global';
import IconButton from '~/components/core/IconButton';
import List from '~/components/core/List';
import ListItem from '~/components/core/ListItem';
import ListItemIcon from '~/components/core/ListItemIcon';
import ListItemText from '~/components/core/ListItemText';
import ThemeProvider from '~/components/core/ThemeProvider';
import { VelocityIcon } from '~/components/icons/colour';
import {
  AnalyticsIcon,
  DashboardIcon,
  ChatIcon,
  MapIcon,
  MenuIcon,
  ServiceIcon,
  SettingsIcon,
  VehiclesIcon,
} from '~/components/icons/mono';
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

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [navOpen, toggleNav] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      toggleNav(false);
    };

    router.events.on('beforeHistoryChange', handleRouteChange);
  }, [router]);

  return (
    <ThemeProvider>
      <Global />
      <div css={css.gitHubCorner}>
        <a
          href="https://github.com/terenceodonoghue/velocity-ui"
          className="github-corner"
          aria-label="View source on GitHub"
        >
          <svg
            width={80}
            height={80}
            viewBox="0 0 250 250"
            style={{
              position: 'absolute',
              top: 0,
              border: 0,
              right: 0,
            }}
            aria-hidden="true"
            fill="#151513"
            color="#fff"
          >
            <path d="M0 0l115 115h15l12 27 108 108V0z" />
            <path
              className="octo-arm"
              d="M128.3 109c-14.5-9.3-9.3-19.4-9.3-19.4 3-6.9 1.5-11 1.5-11-1.3-6.6 2.9-2.3 2.9-2.3 3.9 4.6 2.1 11 2.1 11-2.6 10.3 5.1 14.6 8.9 15.9"
              fill="currentColor"
              style={{
                transformOrigin: '130px 106px',
              }}
            />
            <path
              className="octo-body"
              d="M115 115c-.1.1 3.7 1.5 4.8.4l13.9-13.8c3.2-2.4 6.2-3.2 8.5-3-8.4-10.6-14.7-24.2 1.6-40.6 4.7-4.6 10.2-6.8 15.9-7 .6-1.6 3.5-7.4 11.7-10.9 0 0 4.7 2.4 7.4 16.1 4.3 2.4 8.4 5.6 12.1 9.2 3.6 3.6 6.8 7.8 9.2 12.2 13.7 2.6 16.2 7.3 16.2 7.3-3.6 8.2-9.4 11.1-10.9 11.7-.3 5.8-2.4 11.2-7.1 15.9-16.4 16.4-30 10-40.6 1.6.2 2.8-1 6.8-5 10.8L141 136.5c-1.2 1.2.6 5.4.8 5.3z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <AppBar>
        <Flex alignItems="center" grow={1}>
          <IconButton
            css={css.menuIconButton}
            aria-label="menu"
            onClick={() => toggleNav(!navOpen)}
          >
            <MenuIcon css={css.menuIcon} />
          </IconButton>
          <Flex grow={1}>
            <VelocityIcon css={css.velocityIcon} />
          </Flex>
          <IconButton css={css.avatarIconButton} aria-label="user">
            <Avatar
              alt={fixtures.name}
              size={40}
              src={fixtures.avatar}
              variant="rounded"
            />
          </IconButton>
        </Flex>
      </AppBar>
      <Drawer open={navOpen}>
        <div css={[css.navHeader, { opacity: navOpen ? 1 : 0 }]}>
          <Avatar
            alt={fixtures.name}
            css={css.navAvatar}
            size={32}
            src={fixtures.avatar}
            variant="square"
          />
          <div>
            <span>Welcome</span>
            <span css={css.navUser}>{fixtures.name}</span>
          </div>
        </div>
        <nav>
          <List>
            <Link href="/">
              <ListItem selected={router.pathname === '/'}>
                <ListItemIcon icon={DashboardIcon} />
                <ListItemText css={[css.navText, { opacity: navOpen ? 1 : 0 }]}>
                  Overview
                </ListItemText>
              </ListItem>
            </Link>
            <ListItem selected={router.pathname === '/analytics'}>
              <ListItemIcon icon={AnalyticsIcon} />
              <ListItemText css={[css.navText, { opacity: navOpen ? 1 : 0 }]}>
                Analytics
              </ListItemText>
            </ListItem>
            <ListItem selected={router.pathname === '/vehicles'}>
              <ListItemIcon icon={VehiclesIcon} />
              <ListItemText css={[css.navText, { opacity: navOpen ? 1 : 0 }]}>
                Vehicles
              </ListItemText>
            </ListItem>
            <ListItem selected={router.pathname === '/service'}>
              <ListItemIcon icon={ServiceIcon} />
              <ListItemText css={[css.navText, { opacity: navOpen ? 1 : 0 }]}>
                Service
              </ListItemText>
            </ListItem>
            <ListItem selected={router.pathname === '/map'}>
              <ListItemIcon icon={MapIcon} />
              <ListItemText css={[css.navText, { opacity: navOpen ? 1 : 0 }]}>
                Map
              </ListItemText>
            </ListItem>
            <ListItem selected={router.pathname === '/chat'}>
              <ListItemIcon icon={ChatIcon} />
              <ListItemText css={[css.navText, { opacity: navOpen ? 1 : 0 }]}>
                Chat
              </ListItemText>
            </ListItem>
            <ListItem selected={router.pathname === '/chat'}>
              <ListItemIcon icon={SettingsIcon} />
              <ListItemText css={[css.navText, { opacity: navOpen ? 1 : 0 }]}>
                Settings
              </ListItemText>
            </ListItem>
          </List>
        </nav>
      </Drawer>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
