import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { Avatars, Buttons, Inputs, Surfaces } from '.';
import * as S from '../../.storybook/config.styles';

storiesOf('Style Guide', module).add('Components', () => (
  <>
    <Surfaces.AppBar>
      <Avatars.Round
        alt="Avatar"
        src={faker.image.avatar()}
        height="40"
        width="40"
      />
      <S.IconButton>
        <img alt="Mail" src="./mail.svg" />
      </S.IconButton>
      <S.IconButton width="40px">
        <img alt="Notifications" src="./notifications.svg" />
      </S.IconButton>
    </Surfaces.AppBar>
    <S.Story heading="Avatars">
      <S.Components>
        <Avatars.Round src={faker.image.avatar()} height="48" width="48" />
        <Avatars.Square src={faker.image.avatar()} height="48" width="48" />
      </S.Components>
    </S.Story>
    <S.Story heading="Buttons">
      <S.Components>
        <Buttons.Contained>Contained</Buttons.Contained>
        <Buttons.Outlined>Outlined</Buttons.Outlined>
        <Buttons.Text>Text</Buttons.Text>
        <Buttons.Fab>
          <img alt="Fab" src="./plus.svg" />
        </Buttons.Fab>
      </S.Components>
    </S.Story>
    <S.Story heading="Inputs">
      <S.Components>
        <Inputs.Text label="Label" type="text" placeholder="Placeholder" />
        <Inputs.Slider min={0} max={100} />
        <Inputs.Switch description="Description" label="Label" />
        <Inputs.Radio defaultChecked label="Label" name="storybook" />
        <Inputs.Radio label="Label" name="storybook" />
      </S.Components>
    </S.Story>
  </>
));
