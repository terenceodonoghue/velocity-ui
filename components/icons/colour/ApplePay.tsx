import * as React from 'react';

const SvgApplePay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 55 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#applePay_svg__pattern0)" d="M0 0h54.727v24.758H0z" />
    <mask
      id="applePay_svg__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={55}
      height={25}
    >
      <path fill="url(#applePay_svg__pattern1)" d="M0 0h54.727v24.758H0z" />
    </mask>
    <g mask="url(#applePay_svg__a)">
      <path fill="#2E384D" d="M0 0h54.727v24.758H0z" />
    </g>
    <defs>
      <pattern
        id="applePay_svg__pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#applePay_svg__image0" transform="scale(.0091 .02)" />
      </pattern>
      <pattern
        id="applePay_svg__pattern1"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#applePay_svg__image0" transform="scale(.0091 .02)" />
      </pattern>
      <image
        id="applePay_svg__image0"
        width={110}
        height={50}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SvgApplePay;
