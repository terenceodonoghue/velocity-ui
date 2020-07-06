import React from 'react';
import { IconProps } from '../Icon';

const SvgService: React.FunctionComponent<IconProps> = ({
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
      d="M21.538 10.526l-1.081-.113a6.657 6.657 0 00-.528-1.389l.685-.92a.61.61 0 00-.03-.757l-1.35-1.519a.471.471 0 00-.686-.04l-.827.763a5.537 5.537 0 00-1.244-.587l-.101-1.197c-.026-.288-.244-.508-.508-.508h-1.685V2.565c0-.31-.229-.565-.508-.565-.28 0-.508.254-.508.565v2.823H11.25c-.818 0-1.594.43-2.092 1.152L7.066 9.606l-3.518 1.067C2.635 10.95 2.005 11.87 2 12.926v1.496c.005 1.288.95 2.327 2.107 2.327h.274c.38 1.575 1.837 2.501 3.254 2.078.908-.277 1.624-1.068 1.868-2.078h3.665v4.686c0 .31.228.565.507.565.28 0 .508-.254.508-.565V20.08h1.685c.264 0 .482-.22.508-.514l.101-1.202a5.547 5.547 0 001.249-.582l.827.762a.47.47 0 00.68-.034l1.366-1.519a.619.619 0 00.03-.762l-.685-.92a7.04 7.04 0 00.528-1.383l1.066-.114c.259-.028.462-.27.462-.564v-2.163c0-.288-.203-.53-.462-.559zM6.94 17.805c-.903 0-1.64-.82-1.64-1.824 0-1.005.737-1.824 1.64-1.824.904 0 1.64.819 1.64 1.824 0 1.005-.731 1.824-1.64 1.824zm6.229-2.191H9.574c-.178-1.62-1.503-2.767-2.955-2.575-1.208.164-2.162 1.225-2.314 2.575h-.203c-.6.005-1.087-.531-1.092-1.197v-1.491c.005-.542.33-1.016.802-1.163l3.685-1.118a.497.497 0 00.27-.203L9.97 7.229c.304-.446.781-.706 1.284-.706h1.914v9.09zm1.015-5.844c1.188-.44 2.472.276 2.868 1.603.396 1.327-.249 2.75-1.442 3.19-.462.17-.964.17-1.426 0V9.77zm6.802 2.958l-.965.102c-.218.023-.4.203-.446.44a5.688 5.688 0 01-.676 1.774.61.61 0 00.036.666l.62.835-.711.791-.752-.683a.463.463 0 00-.604-.034c-.482.356-1.02.61-1.588.745-.219.051-.376.254-.396.497l-.092 1.084h-1.228v-3.213c1.771.44 3.528-.801 3.919-2.772.395-1.97-.721-3.924-2.493-4.365a2.904 2.904 0 00-1.426 0V5.394h1.223l.096 1.078c.02.243.183.446.396.497a4.656 4.656 0 011.594.745.464.464 0 00.6-.04l.746-.688.7.785-.624.841a.61.61 0 00-.03.672c.319.536.547 1.135.67 1.767.05.243.228.418.451.44l.98.108v1.13z"
      fill={fill || theme?.colors.lightBlueGrey}
    />
    <mask
      id="Service_svg__a"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.538 10.526l-1.081-.113a6.657 6.657 0 00-.528-1.389l.685-.92a.61.61 0 00-.03-.757l-1.35-1.519a.471.471 0 00-.686-.04l-.827.763a5.537 5.537 0 00-1.244-.587l-.101-1.197c-.026-.288-.244-.508-.508-.508h-1.685V2.565c0-.31-.229-.565-.508-.565-.28 0-.508.254-.508.565v2.823H11.25c-.818 0-1.594.43-2.092 1.152L7.066 9.606l-3.518 1.067C2.635 10.95 2.005 11.87 2 12.926v1.496c.005 1.288.95 2.327 2.107 2.327h.274c.38 1.575 1.837 2.501 3.254 2.078.908-.277 1.624-1.068 1.868-2.078h3.665v4.686c0 .31.228.565.507.565.28 0 .508-.254.508-.565V20.08h1.685c.264 0 .482-.22.508-.514l.101-1.202a5.547 5.547 0 001.249-.582l.827.762a.47.47 0 00.68-.034l1.366-1.519a.619.619 0 00.03-.762l-.685-.92a7.04 7.04 0 00.528-1.383l1.066-.114c.259-.028.462-.27.462-.564v-2.163c0-.288-.203-.53-.462-.559zM6.94 17.805c-.903 0-1.64-.82-1.64-1.824 0-1.005.737-1.824 1.64-1.824.904 0 1.64.819 1.64 1.824 0 1.005-.731 1.824-1.64 1.824zm6.229-2.191H9.574c-.178-1.62-1.503-2.767-2.955-2.575-1.208.164-2.162 1.225-2.314 2.575h-.203c-.6.005-1.087-.531-1.092-1.197v-1.491c.005-.542.33-1.016.802-1.163l3.685-1.118a.497.497 0 00.27-.203L9.97 7.229c.304-.446.781-.706 1.284-.706h1.914v9.09zm1.015-5.844c1.188-.44 2.472.276 2.868 1.603.396 1.327-.249 2.75-1.442 3.19-.462.17-.964.17-1.426 0V9.77zm6.802 2.958l-.965.102c-.218.023-.4.203-.446.44a5.688 5.688 0 01-.676 1.774.61.61 0 00.036.666l.62.835-.711.791-.752-.683a.463.463 0 00-.604-.034c-.482.356-1.02.61-1.588.745-.219.051-.376.254-.396.497l-.092 1.084h-1.228v-3.213c1.771.44 3.528-.801 3.919-2.772.395-1.97-.721-3.924-2.493-4.365a2.904 2.904 0 00-1.426 0V5.394h1.223l.096 1.078c.02.243.183.446.396.497a4.656 4.656 0 011.594.745.464.464 0 00.6-.04l.746-.688.7.785-.624.841a.61.61 0 00-.03.672c.319.536.547 1.135.67 1.767.05.243.228.418.451.44l.98.108v1.13z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgService;
