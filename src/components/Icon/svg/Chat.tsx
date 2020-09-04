import React from 'react';
import { IconProps } from '../Icon';

const SvgChat: React.FunctionComponent<IconProps> = ({
  fill,
  theme,
  title,
  ...props
}) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.52381 18.527V6.13249L12.0035 12.9769L20.4762 6.13249V18.527H3.52381ZM19.1429 5.48995L12.0476 11.0773L4.85714 5.48995H19.1429ZM20.1818 4H3.81818C2.81545 4 2 4.79733 2 5.77778V18.2222C2 19.2027 2.81545 20 3.81818 20H20.1818C21.1845 20 22 19.2027 22 18.2222V5.77778C22 4.79733 21.1845 4 20.1818 4Z"
      fill={fill || theme?.colors.lightBlueGrey}
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="2"
      y="4"
      width="20"
      height="16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.52381 18.527V6.13249L12.0035 12.9769L20.4762 6.13249V18.527H3.52381ZM19.1429 5.48995L12.0476 11.0773L4.85714 5.48995H19.1429ZM20.1818 4H3.81818C2.81545 4 2 4.79733 2 5.77778V18.2222C2 19.2027 2.81545 20 3.81818 20H20.1818C21.1845 20 22 19.2027 22 18.2222V5.77778C22 4.79733 21.1845 4 20.1818 4Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)" />
  </svg>
);

export default SvgChat;
