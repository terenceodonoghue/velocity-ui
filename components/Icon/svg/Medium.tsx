/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { BaseIconProps } from '~/types';

const SvgMedium: FunctionComponent<BaseIconProps> = ({ title, ...props }) => (
  <svg width={30} height={30} {...props}>
    {title ? <title>{title}</title> : null}
    <path
      d="M27 8.683h-.91c-.337 0-.815.488-.815.8v11.304c0 .312.478.738.815.738H27v2.683h-8.242v-2.683h1.725V9.642H20.4L16.37 24.208h-3.12L9.277 9.642h-.101v11.883H10.9v2.683H4v-2.683h.884c.363 0 .841-.426.841-.738V9.482c0-.311-.478-.799-.841-.799H4V6h8.628l2.833 10.542h.078L18.398 6H27v2.683"
      fill="#231F20"
      fillRule="nonzero"
    />
  </svg>
);

export default SvgMedium;
