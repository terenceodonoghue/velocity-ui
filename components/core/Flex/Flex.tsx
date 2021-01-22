import React, { FunctionComponent } from 'react';
import flex from './Flex.styles';
import type { FlexProps } from './Flex.types';

const Flex: FunctionComponent<FlexProps> = ({
  alignItems,
  basis,
  children,
  direction,
  grow,
  justifyContent,
  shrink,
  wrap,
  ...props
}) => (
  <div
    css={[
      flex,
      {
        alignItems,
        justifyContent,
        flex:
          (grow >= 0 || shrink >= 0 || basis || basis >= 0) &&
          `${grow ?? 0} ${shrink ?? 1} ${basis ?? 'auto'}`,
        flexDirection: direction,
        flexWrap: wrap === true ? 'wrap' : wrap,
      },
    ]}
    data-testid="flex"
    {...props}
  >
    {children}
  </div>
);

export default Flex;
