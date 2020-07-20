import * as React from 'react';
import { IconProps } from '../Icon';

const SvgMessages: React.FunctionComponent<IconProps> = ({
  fill,
  theme,
  title,
  ...props
}) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.69861 24.7028V8.17682L16.0049 17.3028L27.3018 8.17682V24.7028H4.69861ZM25.5242 7.3201L16.0639 14.7698L6.47661 7.3201H25.5242ZM26.9094 5.3335H5.09123C3.75427 5.3335 2.66699 6.39661 2.66699 7.70387V24.2965C2.66699 25.6037 3.75427 26.6668 5.09123 26.6668H26.9094C28.2464 26.6668 29.3337 25.6037 29.3337 24.2965V7.70387C29.3337 6.39661 28.2464 5.3335 26.9094 5.3335Z"
      fill="#BFC5D2"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="2"
      y="5"
      width="28"
      height="22"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.69861 24.7028V8.17682L16.0049 17.3028L27.3018 8.17682V24.7028H4.69861ZM25.5242 7.3201L16.0639 14.7698L6.47661 7.3201H25.5242ZM26.9094 5.3335H5.09123C3.75427 5.3335 2.66699 6.39661 2.66699 7.70387V24.2965C2.66699 25.6037 3.75427 26.6668 5.09123 26.6668H26.9094C28.2464 26.6668 29.3337 25.6037 29.3337 24.2965V7.70387C29.3337 6.39661 28.2464 5.3335 26.9094 5.3335Z"
        fill={fill || theme?.colors.lightBlueGrey}
      />
    </mask>
    <g mask="url(#mask0)" />
  </svg>
);

export default SvgMessages;
