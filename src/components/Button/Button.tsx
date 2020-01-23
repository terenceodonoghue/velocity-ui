/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import * as css from './Button.styles';

export const Contained: FunctionComponent<ButtonHTMLAttributes<
  HTMLButtonElement
>> = (props) => <button css={css.contained} type="button" {...props} />;

export const Outlined: FunctionComponent<ButtonHTMLAttributes<
  HTMLButtonElement
>> = (props) => <button css={css.outlined} type="button" {...props} />;

export const Text: FunctionComponent<ButtonHTMLAttributes<
  HTMLButtonElement
>> = (props) => <button css={css.text} type="button" {...props} />;

export const Fab: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => <button css={css.fab} type="button" {...props} />;
