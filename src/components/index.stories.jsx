import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import {
  Avatar, Button, Input, Page,
} from 'components';
import * as S from './index.styles';

storiesOf('Basics|Style Guide', module).add('Components', () => (
  <Fragment>
    <Page.AppBar>
      <Avatar.Round alt="Avatar" src={faker.image.avatar()} height="40" width="40" />
      <S.IconButton>
        <img alt="Mail" src="./mail.svg" />
      </S.IconButton>
      <S.IconButton width="40px">
        <img alt="Notifications" src="./notifications.svg" />
      </S.IconButton>
    </Page.AppBar>
    <S.Story heading="Avatars">
      <S.Components>
        <Avatar.Round src={faker.image.avatar()} height="48" width="48" />
      </S.Components>
    </S.Story>
    <S.Story heading="Buttons">
      <S.Components>
        <Button.Contained>Button Text</Button.Contained>
        <Button.Outlined>Button Text</Button.Outlined>
        <Button.Text>Button Text</Button.Text>
        <Button.Fab>
          <img alt="Fab" src="./plus.svg" />
        </Button.Fab>
      </S.Components>
    </S.Story>
    <S.Story heading="Inputs">
      <S.Components>
        <Input.Label>
          Label
          <Input.Text type="text" placeholder="Placeholder" />
        </Input.Label>
        <Input.Switch />
        <Input.Slider min={0} max={100} />
      </S.Components>
    </S.Story>
  </Fragment>
));