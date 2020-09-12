/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { IconProps } from '~/types';

const SvgCheck: FunctionComponent<IconProps> = ({
  fill,
  theme,
  title,
  ...props
}) => (
  <svg width={19} height={19} fill="none" {...props}>
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.668 5.03L9.8 12.252a1.091 1.091 0 01-1.6 0L5.33 9.236a1.235 1.235 0 010-1.683 1.093 1.093 0 011.6 0L9 9.73l6.069-6.38a1.092 1.092 0 011.6 0 1.231 1.231 0 010 1.682z"
      fill={fill || theme.colors.blueyGrey}
    />
  </svg>
);

export default SvgCheck;
