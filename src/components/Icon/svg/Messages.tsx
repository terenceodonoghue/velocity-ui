import * as React from 'react';
import { IconProps } from '../Icon';

const SvgMessages: React.FunctionComponent<IconProps> = ({
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
      d="M4.699 24.702V8.176l11.306 9.126 11.297-9.126v16.526H4.699zM25.524 7.32l-9.46 7.45-9.587-7.45h19.047zm1.385-1.987H5.091c-1.337 0-2.424 1.063-2.424 2.37v16.593c0 1.307 1.087 2.37 2.424 2.37H26.91c1.337 0 2.425-1.063 2.425-2.37V7.703c0-1.307-1.088-2.37-2.425-2.37z"
      fill={fill || theme?.colors.lightBlueGrey}
    />
    <mask
      id="Messages_svg__a"
      maskUnits="userSpaceOnUse"
      x={2}
      y={5}
      width={28}
      height={22}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.699 24.702V8.176l11.306 9.126 11.297-9.126v16.526H4.699zM25.524 7.32l-9.46 7.45-9.587-7.45h19.047zm1.385-1.987H5.091c-1.337 0-2.424 1.063-2.424 2.37v16.593c0 1.307 1.087 2.37 2.424 2.37H26.91c1.337 0 2.425-1.063 2.425-2.37V7.703c0-1.307-1.088-2.37-2.425-2.37z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgMessages;
