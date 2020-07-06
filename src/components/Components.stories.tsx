import React, { FunctionComponent } from 'react';
import faker from 'faker';
import * as Avatars from './Avatar/Avatar';
import * as Buttons from './Button/Button';
import * as Icons from './Icon/Icon';
import * as Surfaces from './Surface/Surface';

export default {
  title: 'Components',
};

export const AppBar: FunctionComponent = () => (
  <Surfaces.AppBar>
    <Avatars.Round
      alt="Avatar"
      src={faker.image.avatar()}
      height="40"
      width="40"
    />
    <Buttons.Icon>
      <Icons.Messages size={32} />
    </Buttons.Icon>
    <Buttons.Icon>
      <Icons.Notifications size={32} />
    </Buttons.Icon>
  </Surfaces.AppBar>
);
