/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { IconProps } from '~/types';

const SvgDynamic: FunctionComponent<IconProps> = ({
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
      d="M4.576 15.132c.5 1.104 1.76 1.048 2.161-.101L8.65 9.558l2.043 6.13c.42 1.257 1.789 1.154 2.008-.162l1.687-10.122 1.85 3.698a.831.831 0 101.487-.743l-2.62-5.24c-.562-1.124-1.865-.939-2.073.312l-1.557 9.343L9.72 7.509c-.4-1.196-1.7-1.185-2.112-.008l-2.031 5.811-.796-1.756c-.463-1.023-1.661-1.1-2.236-.123l-1.243 2.113a.831.831 0 101.433.843l.85-1.445.991 2.188z"
      fill={fill || theme.colors.blueyGrey}
    />
  </svg>
);

export default SvgDynamic;
