import * as React from 'react';

const SvgVehicles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.428 8.732L18.602 4.73C18.269 4.256 17.831 4 17.378 4h-6.303c-.498 0-.97.309-1.309.859L7.378 8.732c-.15.249-.363.384-.582.392h-2.14C3.19 9.116 2 10.917 2 13.132v1.575c0 1.492.801 2.705 1.791 2.705h.269c.358 1.899 1.661 2.992 2.915 2.449.781-.34 1.393-1.266 1.617-2.449h6.836c.358 1.899 1.662 2.992 2.915 2.449.781-.34 1.393-1.266 1.617-2.449h.244c.985.008 1.791-1.206 1.796-2.697v-4.001c-.005-.754-.214-1.47-.572-1.982zm-4.06-3.225c.21 0 .408.12.552.332l2.314 3.285h-2.727l-1.104-3.617h.965zm-.95 3.617h-2.781V5.507h1.676l1.105 3.617zm-10.1 9.38c-.75 0-1.363-.926-1.363-2.064s.612-2.065 1.363-2.065c.752 0 1.364.927 1.364 2.065 0 1.145-.612 2.065-1.364 2.065zm6.324-2.606h-3.99c-.19-1.952-1.388-3.293-2.677-3.007-1.025.234-1.83 1.454-1.985 3.007h-.199c-.438.007-.796-.528-.8-1.19v-1.576c-.001-1.386.745-2.509 1.66-2.509h2.145c.035 0 .065 0 .1-.007.02 0 .034.007.054.007h5.692v5.275zm0-6.774h-4.14l1.99-3.225c.15-.249.364-.384.583-.392h1.567v3.617zM15.726 4h-3.035 3.035zm1.966 14.505c-.752 0-1.364-.927-1.364-2.065s.612-2.065 1.364-2.065c.75 0 1.363.927 1.363 2.065 0 1.145-.612 2.065-1.363 2.065zm3.313-3.798c-.005.663-.363 1.198-.796 1.198h-.184c-.19-1.951-1.388-3.3-2.677-3.006-1.025.233-1.83 1.454-1.985 3.006h-1.726v-5.274h7.278c.03 0 .055-.008.085-.015 0 .037.005.068.005.105v3.986z"
      fill="currentColor"
    />
    <mask
      id="vehicles_svg__a"
      maskUnits="userSpaceOnUse"
      x={2}
      y={4}
      width={20}
      height={16}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.428 8.732L18.602 4.73C18.269 4.256 17.831 4 17.378 4h-6.303c-.498 0-.97.309-1.309.859L7.378 8.732c-.15.249-.363.384-.582.392h-2.14C3.19 9.116 2 10.917 2 13.132v1.575c0 1.492.801 2.705 1.791 2.705h.269c.358 1.899 1.661 2.992 2.915 2.449.781-.34 1.393-1.266 1.617-2.449h6.836c.358 1.899 1.662 2.992 2.915 2.449.781-.34 1.393-1.266 1.617-2.449h.244c.985.008 1.791-1.206 1.796-2.697v-4.001c-.005-.754-.214-1.47-.572-1.982zm-4.06-3.225c.21 0 .408.12.552.332l2.314 3.285h-2.727l-1.104-3.617h.965zm-.95 3.617h-2.781V5.507h1.676l1.105 3.617zm-10.1 9.38c-.75 0-1.363-.926-1.363-2.064s.612-2.065 1.363-2.065c.752 0 1.364.927 1.364 2.065 0 1.145-.612 2.065-1.364 2.065zm6.324-2.606h-3.99c-.19-1.952-1.388-3.293-2.677-3.007-1.025.234-1.83 1.454-1.985 3.007h-.199c-.438.007-.796-.528-.8-1.19v-1.576c-.001-1.386.745-2.509 1.66-2.509h2.145c.035 0 .065 0 .1-.007.02 0 .034.007.054.007h5.692v5.275zm0-6.774h-4.14l1.99-3.225c.15-.249.364-.384.583-.392h1.567v3.617zM15.726 4h-3.035 3.035zm1.966 14.505c-.752 0-1.364-.927-1.364-2.065s.612-2.065 1.364-2.065c.75 0 1.363.927 1.363 2.065 0 1.145-.612 2.065-1.363 2.065zm3.313-3.798c-.005.663-.363 1.198-.796 1.198h-.184c-.19-1.951-1.388-3.3-2.677-3.006-1.025.233-1.83 1.454-1.985 3.006h-1.726v-5.274h7.278c.03 0 .055-.008.085-.015 0 .037.005.068.005.105v3.986z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgVehicles;