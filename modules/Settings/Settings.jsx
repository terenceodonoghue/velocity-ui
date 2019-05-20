/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Input } from 'components';
import * as S from './Settings.styles';

const Personal = () => (
  <S.Settings heading="Personal data">
    <S.FieldSet>
      <S.Legend>
        Use this page to update your contact information and change your
        password.
      </S.Legend>
      <S.TextField flexBasis="100%">
        Email address
        <Input.Text type="text" defaultValue="appleseed_jane@mac.com" />
      </S.TextField>
      <S.TextField>
        First name
        <Input.Text type="text" defaultValue="Jane" />
      </S.TextField>
      <S.TextField>
        Last name
        <Input.Text type="text" defaultValue="Appleseed" />
      </S.TextField>
      <S.TextField>
        Birth date
        <Input.Text type="date" defaultValue="1965-05-25" />
      </S.TextField>
      <S.TextField>
        Current password
        <Input.Text type="password" defaultValue="password" />
      </S.TextField>
      <S.TextField>
        New password
        <Input.Text type="password" />
      </S.TextField>
      <S.TextField>
        Confirm
        <Input.Text type="password" />
      </S.TextField>
    </S.FieldSet>
    <S.SaveButton>Save Changes</S.SaveButton>
  </S.Settings>
);

const Integrations = () => (
  <S.Settings heading="Integrations">
    <S.FieldSet>
      <S.Legend>Manage third-party app integrations.</S.Legend>
    </S.FieldSet>
  </S.Settings>
);

const Notifications = () => (
  <S.Settings heading="Notifications">
    <S.Legend>
      Control your notification and auto-follow settings.
    </S.Legend>
    <S.FieldSet>
      <S.SwitchField>
        <S.SwitchText>
          <S.Label>Email Notification</S.Label>
          <S.Description>Commits data and history</S.Description>
        </S.SwitchText>
        <Input.Switch />
      </S.SwitchField>
      <S.SwitchField>
        <S.SwitchText>
          <S.Label>Monthly Reports</S.Label>
          <S.Description>Commits data and history</S.Description>
        </S.SwitchText>
        <Input.Switch />
      </S.SwitchField>
      <S.SwitchField>
        <S.SwitchText>
          <S.Label>Push Notification</S.Label>
          <S.Description>Commits data and history</S.Description>
        </S.SwitchText>
        <Input.Switch defaultChecked />
      </S.SwitchField>
      <S.SwitchField>
        <S.SwitchText>
          <S.Label>Quarter Reports</S.Label>
          <S.Description>Commits data and history</S.Description>
        </S.SwitchText>
        <Input.Switch />
      </S.SwitchField>
    </S.FieldSet>
  </S.Settings>
);

export default {
  Personal,
  Integrations,
  Notifications,
};
