/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { BaseIconProps } from '~/types';

const SvgTwitter: FunctionComponent<BaseIconProps> = ({ title, ...props }) => (
  <svg width={30} height={30} {...props}>
    {title ? <title>{title}</title> : null}
    <path
      d="M10.893 25.266c9.372 0 14.497-7.764 14.497-14.497 0-.22-.005-.44-.015-.658a10.36 10.36 0 002.542-2.639 10.16 10.16 0 01-2.926.802 5.113 5.113 0 002.24-2.818 10.218 10.218 0 01-3.235 1.237 5.096 5.096 0 00-8.682 4.646A14.466 14.466 0 014.812 6.016a5.081 5.081 0 00-.69 2.56c0 1.769.9 3.33 2.267 4.242a5.058 5.058 0 01-2.308-.637v.065a5.096 5.096 0 004.087 4.994 5.102 5.102 0 01-2.3.088 5.1 5.1 0 004.759 3.539 10.221 10.221 0 01-6.328 2.18c-.411 0-.817-.023-1.216-.07a14.422 14.422 0 007.81 2.289"
      fill="#1DA1F2"
      fillRule="nonzero"
    />
  </svg>
);

export default SvgTwitter;
