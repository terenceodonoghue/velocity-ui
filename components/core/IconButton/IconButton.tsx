import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import iconButton from './IconButton.styles';

const IconButton: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => (
  <button css={iconButton} data-testid="iconbutton" type="button" {...props} />
);

export default IconButton;
