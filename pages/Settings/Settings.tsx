/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Button, Input, Layout } from '~/components';
import { Selectable } from '~/types';
import * as css from './Settings.styles';

interface IntegrationProps extends Selectable {
  description: string;
  name: string;
  src: string;
}

interface PaletteProps {
  colors: string[];
}

const Integration: FunctionComponent<IntegrationProps> = ({
  description,
  name,
  selected,
  src,
}) => (
  <div css={css.integration}>
    <div css={css.integrationContent({ selected })}>
      <div css={css.integrationIcon}>
        <img alt={name} src={src} />
      </div>
      <div>
        <p css={css.integrationName}>{name}</p>
        <p css={css.integrationDescription}>{description}</p>
      </div>
    </div>
  </div>
);

const Palette: FunctionComponent<PaletteProps> = ({ colors }) => (
  <div css={css.palette({ colors })} />
);

export const Personal: FunctionComponent = () => (
  <Layout.Card heading="Personal data">
    <div css={css.settingsFields}>
      <p css={css.settingsDescription}>
        Use this page to update your contact information and change your
        password.
      </p>
      <Input.Text
        css={css.textInput}
        defaultValue="appleseed_jane@mac.com"
        type="text"
      >
        Email address
      </Input.Text>
      <Input.Text css={css.textInput} defaultValue="Jane" type="text">
        First name
      </Input.Text>
      <Input.Text css={css.textInput} defaultValue="Appleseed" type="text">
        Last name
      </Input.Text>
      <Input.Text css={css.textInput} defaultValue="1965-05-25" type="date">
        Birth date
      </Input.Text>
      <Input.Text css={css.textInput} defaultValue="password" type="password">
        Current password
      </Input.Text>
      <Input.Text css={css.textInput} type="password">
        New password
      </Input.Text>
      <Input.Text css={css.textInput} type="password">
        Confirm
      </Input.Text>
    </div>
    <Button.Contained css={css.button}>Save Changes</Button.Contained>
  </Layout.Card>
);

export const Integrations: FunctionComponent = () => (
  <Layout.Card heading="Integrations">
    <div css={css.settingsFields}>
      <p css={css.settingsDescription}>Manage third-party app integrations.</p>
      <Integration
        description="Boards and prototypes"
        name="InVision"
        selected
        src="./invision.svg"
      />
      <Integration
        description="Commits data and history"
        name="GitHub"
        selected
        src="./github.svg"
      />
      <Integration
        description="Messages and channels"
        name="Slack"
        src="./slack.svg"
      />
      <Integration
        description="Subscribers list"
        name="Mailchimp"
        src="./mailchimp.svg"
      />
      <Integration
        description="Tweets data"
        name="Twitter"
        src="./twitter.svg"
      />
      <Integration
        description="Followers count"
        name="Medium"
        src="./medium.svg"
      />
    </div>
  </Layout.Card>
);

export const Notifications: FunctionComponent = () => (
  <Layout.Card heading="Notifications">
    <div css={css.settingsFields}>
      <p css={css.settingsDescription}>
        Control your notification and auto-follow settings.
      </p>
      <Input.Switch
        css={css.switchInput}
        primary="Email Notification"
        secondary="Commits data and history"
      />
      <Input.Switch
        css={css.switchInput}
        primary="Monthly Reports"
        secondary="Commits data and history"
      />
      <Input.Switch
        css={css.switchInput}
        primary="Push Notification"
        secondary="Commits data and history"
      />
      <Input.Switch
        css={css.switchInput}
        primary="Quarter Reports"
        secondary="Commits data and history"
      />
    </div>
  </Layout.Card>
);

export const Theme: FunctionComponent = () => (
  <Layout.Card heading="Theme">
    <div css={css.settingsFields}>
      <p css={css.settingsDescription}>
        Select a color scheme for your Velocity app.
      </p>
      <div css={css.theme}>
        <Palette colors={['#2e5bff', '#e0e7ff', '#8097b1']} />
        <Input.Radio css={css.radioInput} defaultChecked name="theme">
          Shelob
        </Input.Radio>
      </div>
      <div css={css.theme}>
        <Palette colors={['#8c54ff', '#00c1d4', '#fad050']} />
        <Input.Radio css={css.radioInput} name="theme">
          Denethor
        </Input.Radio>
      </div>
      <div css={css.theme}>
        <Palette colors={['#00a4de', '#3b7ed5', '#00a550']} />
        <Input.Radio css={css.radioInput} name="theme">
          Quickbeam
        </Input.Radio>
      </div>
      <div css={css.theme}>
        <Palette colors={['#232a64', '#85c800', '#616266']} />
        <Input.Radio css={css.radioInput} name="theme">
          Shadowfax
        </Input.Radio>
      </div>
      <div css={css.theme}>
        <Palette colors={['#a728a3', '#f7e0ff', '#7675ac']} />
        <Input.Radio css={css.radioInput} name="theme">
          Grima
        </Input.Radio>
      </div>
    </div>
  </Layout.Card>
);
