import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import fab from './Fab.styles';

const Fab: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => <button css={fab} data-testid="fab" type="button" {...props} />;

export default Fab;
