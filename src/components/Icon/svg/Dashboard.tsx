import React from 'react';
import { IconProps } from '../Icon';

const SvgDashboard: React.FunctionComponent<IconProps> = ({
  fill,
  size,
  theme,
  title,
  ...props
}) => (
  <svg viewBox={`0 0 ${size} ${size}`} fill="none" {...props}>
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.1 2.3a.8.8 0 00-.8.8v6.8a.8.8 0 00.8.8h6.8a.8.8 0 00.8-.8V3.1a.8.8 0 00-.8-.8H3.1zm0 11a.8.8 0 00-.8.8v6.8a.8.8 0 00.8.8h6.8a.8.8 0 00.8-.8v-6.8a.8.8 0 00-.8-.8H3.1zM13.3 3.1a.8.8 0 01.8-.8h6.8a.8.8 0 01.8.8v6.8a.8.8 0 01-.8.8h-6.8a.8.8 0 01-.8-.8V3.1zm.8 10.2a.8.8 0 00-.8.8v6.8a.8.8 0 00.8.8h6.8a.8.8 0 00.8-.8v-6.8a.8.8 0 00-.8-.8h-6.8zm.65 1.45h5.5v5.5h-5.5v-5.5zm5.5-11h-5.5v5.5h5.5v-5.5zm-16.5 0h5.5v5.5h-5.5v-5.5zm5.5 11h-5.5v5.5h5.5v-5.5z"
      fill={fill || theme?.colors.lightBlueGrey}
    />
    <mask
      id="Dashboard_svg__a"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.1 2.3a.8.8 0 00-.8.8v6.8a.8.8 0 00.8.8h6.8a.8.8 0 00.8-.8V3.1a.8.8 0 00-.8-.8H3.1zm0 11a.8.8 0 00-.8.8v6.8a.8.8 0 00.8.8h6.8a.8.8 0 00.8-.8v-6.8a.8.8 0 00-.8-.8H3.1zM13.3 3.1a.8.8 0 01.8-.8h6.8a.8.8 0 01.8.8v6.8a.8.8 0 01-.8.8h-6.8a.8.8 0 01-.8-.8V3.1zm.8 10.2a.8.8 0 00-.8.8v6.8a.8.8 0 00.8.8h6.8a.8.8 0 00.8-.8v-6.8a.8.8 0 00-.8-.8h-6.8zm.65 1.45h5.5v5.5h-5.5v-5.5zm5.5-11h-5.5v5.5h5.5v-5.5zm-16.5 0h5.5v5.5h-5.5v-5.5zm5.5 11h-5.5v5.5h5.5v-5.5z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgDashboard;
