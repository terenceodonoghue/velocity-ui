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
      d="M3.524 18.527V6.132l8.48 6.845 8.472-6.845v12.395H3.524zM19.143 5.49l-7.095 5.587-7.19-5.587h14.285zM20.182 4H3.818C2.815 4 2 4.797 2 5.778v12.444C2 19.202 2.815 20 3.818 20h16.364C21.185 20 22 19.203 22 18.222V5.778C22 4.798 21.184 4 20.182 4z"
      fill={fill || theme.colors.lightBlueGrey}
    />
    <mask
      id="Chat_svg__a"
      maskUnits="userSpaceOnUse"
      x={2}
      y={4}
      width={20}
      height={16}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.524 18.527V6.132l8.48 6.845 8.472-6.845v12.395H3.524zM19.143 5.49l-7.095 5.587-7.19-5.587h14.285zM20.182 4H3.818C2.815 4 2 4.797 2 5.778v12.444C2 19.202 2.815 20 3.818 20h16.364C21.185 20 22 19.203 22 18.222V5.778C22 4.798 21.184 4 20.182 4z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgChat;
