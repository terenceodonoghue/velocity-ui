import React, { FunctionComponent } from 'react';
import * as css from './Container.styles';
import type { ContainerProps } from './Container.types';

const Container: FunctionComponent<ContainerProps> = ({
  children,
  heading,
  ...props
}) => (
  <>
    {heading && (
      <h1 css={css.heading} data-testid="container-heading">
        {heading}
      </h1>
    )}
    <div css={css.container} data-testid="container" {...props}>
      {children}
    </div>
  </>
);

export default Container;
