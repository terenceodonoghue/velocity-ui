import * as React from 'react';

const SvgMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 .62h18v1.855H0V.619zm0 5.566h18v1.856H0V6.186zm11 5.567H0v1.856h11v-1.856z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMenu;
