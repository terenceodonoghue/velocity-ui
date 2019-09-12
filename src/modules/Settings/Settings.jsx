import React from 'react';
import { Container } from 'components';
import * as S from './Settings.styles';

const Personal = () => (
  <Container.Card heading="Personal data">
    <S.FieldSet>
      <S.Legend>
        Use this page to update your contact information and change your
        password.
      </S.Legend>
      <S.TextField defaultValue="appleseed_jane@mac.com" label="Email address" type="text" />
      <S.TextField defaultValue="Jane" label="First name" type="text" />
      <S.TextField defaultValue="Appleseed" label="Last name" type="text" />
      <S.TextField defaultValue="1965-05-25" label="Birth date" type="date" />
      <S.TextField defaultValue="password" label="Current password" type="password" />
      <S.TextField label="New password" type="password" />
      <S.TextField label="Confirm" type="password" />
    </S.FieldSet>
    <S.SaveButton>Save Changes</S.SaveButton>
  </Container.Card>
);

const Integrations = () => (
  <Container.Card heading="Integrations">
    <S.FieldSet>
      <S.Legend>Manage third-party app integrations.</S.Legend>
      <S.CheckboxField>
        <S.CheckboxText active>
          <S.Icon>
            <img alt="InVision" src="./invision.svg" />
          </S.Icon>
          <div>
            <S.Label>InVision</S.Label>
            <S.Description>Boards and prototypes</S.Description>
          </div>
        </S.CheckboxText>
      </S.CheckboxField>
      <S.CheckboxField>
        <S.CheckboxText active>
          <S.Icon>
            <img alt="GitHub" src="./github.svg" />
          </S.Icon>
          <div>
            <S.Label>GitHub</S.Label>
            <S.Description>Commits data and history</S.Description>
          </div>
        </S.CheckboxText>
      </S.CheckboxField>
      <S.CheckboxField>
        <S.CheckboxText>
          <S.Icon>
            <img alt="Slack" src="./slack.svg" />
          </S.Icon>
          <div>
            <S.Label>Slack</S.Label>
            <S.Description>Messages and channels</S.Description>
          </div>
        </S.CheckboxText>
      </S.CheckboxField>
      <S.CheckboxField>
        <S.CheckboxText>
          <S.Icon>
            <img alt="Mailchimp" src="./mailchimp.svg" />
          </S.Icon>
          <div>
            <S.Label>Mailchimp</S.Label>
            <S.Description>Subscribers list</S.Description>
          </div>
        </S.CheckboxText>
      </S.CheckboxField>
      <S.CheckboxField>
        <S.CheckboxText>
          <S.Icon>
            <img alt="Twitter" src="./twitter.svg" />
          </S.Icon>
          <div>
            <S.Label>Twitter</S.Label>
            <S.Description>Tweets data</S.Description>
          </div>
        </S.CheckboxText>
      </S.CheckboxField>
      <S.CheckboxField>
        <S.CheckboxText>
          <S.Icon>
            <img alt="Medium" src="./medium.svg" />
          </S.Icon>
          <div>
            <S.Label>Medium</S.Label>
            <S.Description>Followers count</S.Description>
          </div>
        </S.CheckboxText>
      </S.CheckboxField>
    </S.FieldSet>
  </Container.Card>
);

const Notifications = () => (
  <Container.Card heading="Notifications">
    <S.FieldSet>
      <S.Legend>
        Control your notification and auto-follow settings.
      </S.Legend>
      <S.SwitchField description="Commits data and history" label="Email Notification" />
      <S.SwitchField description="Commits data and history" label="Monthly Reports" />
      <S.SwitchField description="Commits data and history" label="Push Notification" />
      <S.SwitchField description="Commits data and history" label="Quarter Reports" />
    </S.FieldSet>
  </Container.Card>
);

export const Theme = () => (
  <Container.Card heading="Theme">
    <S.FieldSet>
      <S.Legend>Select a color scheme for your Velocity app.</S.Legend>
      <S.Theme>
        <S.Palette colors={['#2e5bff', '#e0e7ff', '#8097b1']} />
        <S.RadioField defaultChecked label="Shelob" name="theme" />
      </S.Theme>
      <S.Theme>
        <S.Palette colors={['#8c54ff', '#00c1d4', '#fad050']} />
        <S.RadioField label="Denethor" name="theme" />
      </S.Theme>
      <S.Theme>
        <S.Palette colors={['#00a4de', '#3b7ed5', '#00a550']} />
        <S.RadioField label="Quickbeam" name="theme" />
      </S.Theme>
      <S.Theme>
        <S.Palette colors={['#232a64', '#85c800', '#616266']} />
        <S.RadioField label="Shadowfax" name="theme" />
      </S.Theme>
      <S.Theme>
        <S.Palette colors={['#a728a3', '#f7e0ff', '#7675ac']} />
        <S.RadioField label="Grima" name="theme" />
      </S.Theme>
    </S.FieldSet>
  </Container.Card>
);

export default {
  Personal,
  Integrations,
  Notifications,
  Theme,
};
