/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Container, Input } from 'components';
import * as S from './Settings.styles';

const Personal = () => (
  <S.Personal>
    <Container.Card heading="Personal data">
      <S.Content>
        <S.Paragraph>
          Use this page to update your contact information and change your
          password.
        </S.Paragraph>
        <S.Options>
          <S.Option>
            <Input.Label>
              Email address
              <Input.Text type="text" defaultValue="appleseed_jane@mac.com" />
            </Input.Label>
          </S.Option>
        </S.Options>
        <S.Options>
          <S.Option>
            <Input.Label>
              First name
              <Input.Text type="text" defaultValue="Jane" />
            </Input.Label>
          </S.Option>
          <S.Option>
            <Input.Label>
              Last name
              <Input.Text type="text" defaultValue="Appleseed" />
            </Input.Label>
          </S.Option>
          <S.Option>
            <Input.Label>
              Birth date
              <Input.Text type="date" defaultValue="1965-05-25" />
            </Input.Label>
          </S.Option>
        </S.Options>
        <S.Options>
          <S.Option>
            <Input.Label>
              Current password
              <Input.Text type="password" defaultValue="password" />
            </Input.Label>
          </S.Option>
          <S.Option>
            <Input.Label>
              New password
              <Input.Text type="password" />
            </Input.Label>
          </S.Option>
          <S.Option>
            <Input.Label>
              Confirm
              <Input.Text type="password" />
            </Input.Label>
          </S.Option>
        </S.Options>
        <S.Options>
          <S.Option>
            <Button.Contained>Save Changes</Button.Contained>
          </S.Option>
        </S.Options>
      </S.Content>
    </Container.Card>
  </S.Personal>
);

const Integrations = () => (
  <S.Integrations>
    <Container.Card heading="Integrations">
      <S.Content>
        <S.Paragraph>Manage third-party app integrations.</S.Paragraph>
      </S.Content>
    </Container.Card>
  </S.Integrations>
);

const Notifications = () => (
  <S.Notifications>
    <Container.Card heading="Notifications">
      <S.Content>
        <S.Paragraph>
          Control your notification and auto-follow settings.
        </S.Paragraph>
        <S.Options>
          <S.Option>
            <S.Text>
              <S.Label>Email Notification</S.Label>
              <S.Description>Commits data and history</S.Description>
            </S.Text>
            <Input.Switch />
          </S.Option>
          <S.Option>
            <S.Text>
              <S.Label>Monthly Reports</S.Label>
              <S.Description>Commits data and history</S.Description>
            </S.Text>
            <Input.Switch />
          </S.Option>
          <S.Option>
            <S.Text>
              <S.Label>Push Notification</S.Label>
              <S.Description>Commits data and history</S.Description>
            </S.Text>
            <Input.Switch defaultChecked />
          </S.Option>
          <S.Option>
            <S.Text>
              <S.Label>Quarter Reports</S.Label>
              <S.Description>Commits data and history</S.Description>
            </S.Text>
            <Input.Switch />
          </S.Option>
        </S.Options>
      </S.Content>
    </Container.Card>
  </S.Notifications>
);

export default {
  Personal,
  Integrations,
  Notifications,
};
