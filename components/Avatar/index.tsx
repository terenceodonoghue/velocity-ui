/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { AvatarProps } from '~/types';
import * as css from './Avatar.styles';

const Avatar: FunctionComponent<AvatarProps> = ({
  alt,
  round,
  size,
  ...props
}) => (
  <img
    alt={alt}
    css={round ? css.round({ size }) : css.square({ size })}
    {...props}
  />
);

export default Avatar;
