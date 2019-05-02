import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import {
  Avatar, Button, Container, Input, Page,
} from 'components';
import * as S from './index.styles';

storiesOf('Basics|Style Guide', module).add('Components', () => (
  <S.Components>
    <Page.AppBar>
      <Avatar.Round alt="Avatar" src={faker.image.avatar()} height="40" width="40" />
      <Button.Text width="40px">
        <img alt="Mail" src="./mail.svg" />
      </Button.Text>
      <Button.Text width="40px">
        <img alt="Notifications" src="./notifications.svg" />
      </Button.Text>
    </Page.AppBar>
    <Container.Card heading="Avatars">
      <S.Stories>
        <Avatar.Round src={faker.image.avatar()} height="48" width="48" />
      </S.Stories>
    </Container.Card>
    <Container.Card heading="Buttons">
      <S.Stories>
        <Button.Contained>Button Text</Button.Contained>
        <Button.Outlined>Button Text</Button.Outlined>
        <Button.Text>Button Text</Button.Text>
        <Button.Fab>
          <img alt="Fab" src="./plus.svg" />
        </Button.Fab>
      </S.Stories>
    </Container.Card>
    <Container.Card heading="Inputs">
      <S.Stories>
        <Input.Label>
          Label
          <Input.Text type="text" placeholder="Placeholder" />
        </Input.Label>
        <Input.Switch />
        <Input.Slider min={0} max={100} />
      </S.Stories>
    </Container.Card>
  </S.Components>
));
