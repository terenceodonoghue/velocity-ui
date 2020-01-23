/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent, ImgHTMLAttributes } from 'react';
import * as css from './Avatar.styles';

export const Round: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = ({
  alt,
  ...props
}) => <img alt={alt} css={css.round} {...props} />;

export const Square: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = ({
  alt,
  ...props
}) => <img alt={alt} css={css.square} {...props} />;
