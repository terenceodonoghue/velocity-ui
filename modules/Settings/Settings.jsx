/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Container, Input } from 'components';
import * as S from './Settings.styles';

const Personal = () => (
  <S.Personal>
    <Container.Card title="Personal data" height="100%" width="100%">
      <S.Content>
        <S.Paragraph>
          Use this page to update your contact information and change your
          password.
        </S.Paragraph>
        <S.Row>
          <S.Column>
            <Input.Label>
              Email address
              <Input.Text type="text" defaultValue="appleseed_jane@mac.com" />
            </Input.Label>
          </S.Column>
        </S.Row>
        <S.Row>
          <S.Column>
            <Input.Label>
              First name
              <Input.Text type="text" defaultValue="Jane" />
            </Input.Label>
          </S.Column>
          <S.Column>
            <Input.Label>
              Last name
              <Input.Text type="text" defaultValue="Appleseed" />
            </Input.Label>
          </S.Column>
          <S.Column>
            <Input.Label>
              Birth date
              <Input.Text type="date" defaultValue="1965-05-25" />
            </Input.Label>
          </S.Column>
        </S.Row>
        <S.Row>
          <S.Column>
            <Input.Label>
              Current password
              <Input.Text type="password" defaultValue="password" />
            </Input.Label>
          </S.Column>
          <S.Column>
            <Input.Label>
              New password
              <Input.Text type="password" />
            </Input.Label>
          </S.Column>
          <S.Column>
            <Input.Label>
              Confirm
              <Input.Text type="password" />
            </Input.Label>
          </S.Column>
        </S.Row>
        <S.Row>
          <S.Column>
            <Button.Contained>Save Changes</Button.Contained>
          </S.Column>
        </S.Row>
      </S.Content>
    </Container.Card>
  </S.Personal>
);

const Notifications = () => (
  <S.Notifications>
    <Container.Card title="Notifications" height="100%" width="100%">
      <S.Content>
        <S.Paragraph>
          Control your notification and auto-follow settings.
        </S.Paragraph>
        <S.Row>
          <S.Column width="35%">
            <S.Option>
              <S.Text>
                <S.Label>Email Notification</S.Label>
                <S.Description>Commits data and history</S.Description>
              </S.Text>
              <Input.Switch />
            </S.Option>
          </S.Column>
          <S.Column width="35%">
            <S.Option>
              <S.Text>
                <S.Label>Monthly Reports</S.Label>
                <S.Description>Commits data and history</S.Description>
              </S.Text>
              <Input.Switch />
            </S.Option>
          </S.Column>
        </S.Row>
        <S.Row>
          <S.Column width="35%">
            <S.Option>
              <S.Text>
                <S.Label>Push Notification</S.Label>
                <S.Description>Commits data and history</S.Description>
              </S.Text>
              <Input.Switch defaultChecked />
            </S.Option>
          </S.Column>
          <S.Column width="35%">
            <S.Option>
              <S.Text>
                <S.Label>Quarter Reports</S.Label>
                <S.Description>Commits data and history</S.Description>
              </S.Text>
              <Input.Switch />
            </S.Option>
          </S.Column>
        </S.Row>
      </S.Content>
    </Container.Card>
  </S.Notifications>
);

export default {
  Personal,
  Notifications,
};
