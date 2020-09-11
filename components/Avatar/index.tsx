/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent, ImgHTMLAttributes } from 'react';
import * as css from './Avatar.styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  round?: boolean;
}

const Avatar: FunctionComponent<AvatarProps> = ({ alt, round, ...props }) => (
  <img alt={alt} css={round ? css.round : css.square} {...props} />
);

export default Avatar;
