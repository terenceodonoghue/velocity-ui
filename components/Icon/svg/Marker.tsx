/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { IconProps } from '~/types';

const SvgMarker: FunctionComponent<IconProps> = ({
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
      d="M8.938 14.836S4.25 9.136 4.25 6.567c0-2.57 2.099-4.653 4.688-4.653 2.588 0 4.687 2.083 4.687 4.653 0 2.57-4.687 8.269-4.687 8.269zm-1.436 1.23l1.436 1.747 1.435-1.746.22-.273a46.776 46.776 0 002.234-3.047c.388-.577.743-1.14 1.06-1.682C14.916 9.301 15.5 7.847 15.5 6.567 15.5 2.927 12.55 0 8.937 0a6.564 6.564 0 00-6.562 6.567c0 1.28.584 2.734 1.613 4.498.317.543.672 1.105 1.059 1.682a46.815 46.815 0 002.455 3.32zM8.938 3.75a2.812 2.812 0 100 5.625 2.812 2.812 0 000-5.625zm0 1.875a.938.938 0 110 1.875.938.938 0 010-1.875z"
      fill={fill || theme.colors.blueyGrey}
    />
  </svg>
);

export default SvgMarker;
