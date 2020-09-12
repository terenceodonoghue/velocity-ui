/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { IconProps } from '~/types';

const SvgEnergy: FunctionComponent<IconProps> = ({
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
      d="M15.907 7.166a.756.756 0 00-.685-.437h-4.165l2.787-4.38a.756.756 0 00-.638-1.162H8.672a.756.756 0 00-.654.378l-5.541 9.572a.756.756 0 00.654 1.134h4.552l-1.251 4.587a.756.756 0 001.307.686l8.06-9.572a.755.755 0 00.108-.806zm-7.114 6.78l.608-2.232a.756.756 0 00-.729-.955h-4.23L9.107 2.7h2.722l-2.788 4.38a.756.756 0 00.638 1.162h3.917l-4.804 5.705z"
      fill={fill || theme.colors.blueyGrey}
    />
  </svg>
);

export default SvgEnergy;
