/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { BaseIconProps } from '~/types';

const SvgSlack: FunctionComponent<BaseIconProps> = ({ title, ...props }) => (
  <svg width={30} height={30} {...props}>
    {title ? <title>{title}</title> : null}
    <g fillRule="nonzero" fill="none">
      <path
        d="M18.262 5.361a1.959 1.959 0 10-3.726 1.21l5.066 15.587a1.96 1.96 0 002.383 1.215c1.04-.3 1.674-1.404 1.342-2.425L18.262 5.36"
        fill="#DFA22F"
      />
      <path
        d="M10.413 7.911a1.96 1.96 0 00-3.726 1.211l5.065 15.586a1.959 1.959 0 002.384 1.215c1.04-.3 1.673-1.403 1.342-2.425L10.413 7.911"
        fill="#3CB187"
      />
      <path
        d="M24.639 18.27a1.959 1.959 0 10-1.21-3.727L7.841 19.609a1.959 1.959 0 00-1.215 2.383c.3 1.04 1.404 1.674 2.425 1.342L24.64 18.27"
        fill="#CE1E5B"
      />
      <path
        d="M11.09 22.672l3.726-1.21-1.21-3.726-3.726 1.21 1.21 3.726"
        fill="#392538"
      />
      <path
        d="M18.94 20.121l3.725-1.21-1.21-3.727-3.726 1.211 1.211 3.726"
        fill="#BB242A"
      />
      <path
        d="M22.089 10.42a1.96 1.96 0 00-1.211-3.726L5.292 11.76a1.959 1.959 0 00-1.215 2.383c.3 1.04 1.403 1.673 2.425 1.341l15.587-5.064"
        fill="#72C5CD"
      />
      <path
        d="M8.54 14.822l3.725-1.21-1.21-3.726-3.727 1.211 1.211 3.725"
        fill="#248C73"
      />
      <path
        d="M16.389 12.272l3.726-1.21-1.211-3.727-3.726 1.211 1.21 3.726"
        fill="#62803A"
      />
    </g>
  </svg>
);

export default SvgSlack;
