/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { BaseIconProps } from '~/types';

const SvgInvision: FunctionComponent<BaseIconProps> = ({ title, ...props }) => (
  <svg width={30} height={30} {...props}>
    {title ? <title>{title}</title> : null}
    <g transform="translate(3 5)" fill="#FF427A" fillRule="nonzero">
      <path d="M22.462 14.853s-.767 1.75-1.652 2.063c-.885.315-1.649-.359-.182-3.678 1.467-3.32.642-6.192-.275-7.09-.917-.896-3.392-1.166-4.767-.358a9.38 9.38 0 00-2.297 1.952l.443-2.4-5.39.089-.824 2.961H9.9s-2.2 6.519-2.383 6.67c-.183.15-1.75 1.32-2.413 1.54-.664.22-1.438.404-1.071-1.031C4.4 14.135 6.6 5.34 6.6 5.34H.549L0 8.213v.18h2.2S.46 15.211.367 16.018c-.094.808.093 2.477 2.747 2.961 2.654.485 4.587-2.064 4.587-2.064l-.366 2.064h3.483s1.808-7.035 2.471-8.584c.664-1.548 2.876-2.902 3.982-2.004 1.106.898.607 2.333.148 3.5-.458 1.166-1.475 4.255-.59 5.804.884 1.548 3.8 2.212 5.45.298 1.185-1.392 1.628-2.731 1.628-2.731l-1.445-.41z" />
      <circle cx={4.884} cy={1.77} r={1.77} />
    </g>
  </svg>
);

export default SvgInvision;
