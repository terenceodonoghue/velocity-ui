import React, { FunctionComponent } from 'react';
import * as css from './Avatar.styles';
import type { AvatarProps } from './Avatar.types';

const Avatar: FunctionComponent<AvatarProps> = ({
  alt,
  size,
  variant = 'rounded',
  ...props
}) => (
  <img
    alt={alt}
    css={[
      variant === 'rounded' ? css.rounded : css.square,
      { height: size, width: size },
    ]}
    data-testid="avatar"
    {...props}
  />
);

export default Avatar;
