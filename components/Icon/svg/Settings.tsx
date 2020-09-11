/** @jsx jsx */
import { jsx } from '@emotion/core';
import { IconProps } from '~/types';

const SvgSettings: React.FunctionComponent<IconProps> = ({
  fill,
  theme,
  title,
  ...props
}) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9763 9.90052L19.5725 9.66237C19.4263 9.19026 19.2383 8.73487 19.0085 8.30036L19.8357 7.14307C20.1866 6.65007 20.1323 5.97742 19.702 5.55126L18.457 4.30623C18.223 4.07227 17.9138 3.94275 17.5838 3.94275C17.3247 3.94275 17.0782 4.02213 16.8694 4.17254L15.7079 4.99977C15.2567 4.76163 14.7845 4.56527 14.2957 4.41904L14.0618 3.03196C13.9615 2.43451 13.4476 2 12.8418 2H11.0829C10.4771 2 9.96319 2.43451 9.86292 3.03196L9.62059 4.45246C9.15266 4.59869 8.69727 4.79088 8.26276 5.02484L7.11382 4.19761C6.90492 4.0472 6.65424 3.96782 6.39521 3.96782C6.06515 3.96782 5.75181 4.09733 5.52202 4.3313L4.27281 5.57633C3.84666 6.00248 3.78817 6.67513 4.13911 7.16813L4.97471 8.34214C4.74492 8.78082 4.56109 9.23622 4.41904 9.70833L3.03196 9.9423C2.43451 10.0426 2 10.5565 2 11.1623V12.9212C2 13.527 2.43451 14.0409 3.03196 14.1411L4.45246 14.3835C4.59869 14.8514 4.79088 15.3068 5.02484 15.7413L4.20178 16.8861C3.85083 17.3791 3.90515 18.0517 4.33548 18.4779L5.58051 19.7229C5.81448 19.9569 6.12364 20.0864 6.4537 20.0864C6.71274 20.0864 6.95924 20.007 7.16813 19.8566L8.34214 19.021C8.76411 19.2424 9.20698 19.4221 9.66237 19.5641L9.89634 20.9679C9.99661 21.5654 10.5105 21.9999 11.1163 21.9999H12.8794C13.4852 21.9999 13.9991 21.5654 14.0994 20.9679L14.3375 19.5641C14.8096 19.4179 15.265 19.2299 15.6995 19.0001L16.8568 19.8273C17.0657 19.9777 17.3164 20.0571 17.5754 20.0571C17.9055 20.0571 18.2147 19.9276 18.4486 19.6936L19.6936 18.4486C20.1198 18.0225 20.1783 17.3498 19.8273 16.8568L19.0001 15.6953C19.2299 15.2567 19.4221 14.8013 19.5641 14.3333L20.9679 14.0994C21.5654 13.9991 21.9999 13.4852 21.9999 12.8794V11.1205C22.0082 10.5147 21.5737 10.0008 20.9763 9.90052ZM20.8802 12.8794C20.8802 12.9337 20.8426 12.9797 20.7883 12.988L19.0335 13.2805C18.8121 13.3181 18.6366 13.481 18.5823 13.6941C18.4235 14.3083 18.1812 14.8974 17.8553 15.4447C17.7425 15.6369 17.7509 15.875 17.8804 16.0588L18.9124 17.5128C18.9416 17.5545 18.9374 17.6172 18.8998 17.6548L17.6548 18.8998C17.6256 18.9291 17.5963 18.9333 17.5754 18.9333C17.5504 18.9333 17.5295 18.9249 17.5128 18.9124L16.063 17.8804C15.8834 17.7509 15.641 17.7425 15.4488 17.8553C14.9015 18.1812 14.3124 18.4235 13.6983 18.5823C13.481 18.6366 13.3181 18.8163 13.2847 19.0335L12.988 20.7883C12.9797 20.8426 12.9337 20.8802 12.8794 20.8802H11.1205C11.0662 20.8802 11.0202 20.8426 11.0119 20.7883L10.7194 19.0335C10.6818 18.8121 10.5189 18.6366 10.3058 18.5823C9.70833 18.4277 9.13177 18.1896 8.59282 17.8804C8.50508 17.8303 8.40481 17.8052 8.30872 17.8052C8.19591 17.8052 8.07893 17.8386 7.98283 17.9097L6.52055 18.95C6.49966 18.9625 6.47877 18.9709 6.45788 18.9709C6.44117 18.9709 6.40774 18.9667 6.3785 18.9374L5.13347 17.6924C5.09587 17.6548 5.09169 17.5963 5.12093 17.5504L6.14871 16.109C6.27823 15.9251 6.28658 15.6828 6.17378 15.4906C5.8479 14.9475 5.59722 14.3584 5.43846 13.7442C5.37997 13.5312 5.20449 13.3682 4.98724 13.3306L3.21996 13.0298C3.16565 13.0215 3.12805 12.9755 3.12805 12.9212V11.1623C3.12805 11.1079 3.16565 11.062 3.21996 11.0536L4.96217 10.7612C5.1836 10.7236 5.36326 10.5606 5.41757 10.3434C5.57215 9.72922 5.8103 9.13595 6.132 8.58864C6.2448 8.39645 6.23227 8.15831 6.10275 7.97866L5.06244 6.51637C5.0332 6.47459 5.03737 6.41192 5.07498 6.37432L6.32001 5.12929C6.34925 5.10004 6.3785 5.09587 6.39939 5.09587C6.42446 5.09587 6.44535 5.10422 6.46206 5.11676L7.90345 6.14453C8.08728 6.27405 8.32961 6.28241 8.52179 6.1696C9.06493 5.84372 9.65402 5.59304 10.2682 5.43428C10.4813 5.37579 10.6442 5.20031 10.6818 4.98306L10.9826 3.21579C10.991 3.16147 11.0369 3.12387 11.0912 3.12387H12.8502C12.9045 3.12387 12.9504 3.16147 12.9588 3.21579L13.2512 4.95799C13.2888 5.17943 13.4518 5.35908 13.669 5.41339C14.2999 5.57215 14.9015 5.81865 15.4614 6.14871C15.6536 6.26152 15.8917 6.25316 16.0755 6.12364L17.5169 5.08751C17.5378 5.07498 17.5587 5.06662 17.5796 5.06662C17.5963 5.06662 17.6297 5.0708 17.659 5.10004L18.904 6.34508C18.9416 6.38268 18.9458 6.44117 18.9165 6.48713L17.8846 7.93688C17.7551 8.11653 17.7467 8.35885 17.8595 8.55104C18.1854 9.09835 18.4277 9.68744 18.5865 10.3016C18.6408 10.5189 18.8205 10.6818 19.0377 10.7152L20.7925 11.0119C20.8468 11.0202 20.8844 11.0662 20.8844 11.1205V12.8794H20.8802ZM8.81425 11.9979C8.81425 13.7568 10.2431 15.1856 12.002 15.1856C13.761 15.1856 15.1898 13.7568 15.1898 11.9979C15.1898 10.2389 13.761 8.81007 12.002 8.81007C10.2431 8.81007 8.81425 10.2389 8.81425 11.9979Z"
      fill={fill || theme?.colors.lightBlueGrey}
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="2"
      y="2"
      width="20"
      height="20"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9763 9.90052L19.5725 9.66237C19.4263 9.19026 19.2383 8.73487 19.0085 8.30036L19.8357 7.14307C20.1866 6.65007 20.1323 5.97742 19.702 5.55126L18.457 4.30623C18.223 4.07227 17.9138 3.94275 17.5838 3.94275C17.3247 3.94275 17.0782 4.02213 16.8694 4.17254L15.7079 4.99977C15.2567 4.76163 14.7845 4.56527 14.2957 4.41904L14.0618 3.03196C13.9615 2.43451 13.4476 2 12.8418 2H11.0829C10.4771 2 9.96319 2.43451 9.86292 3.03196L9.62059 4.45246C9.15266 4.59869 8.69727 4.79088 8.26276 5.02484L7.11382 4.19761C6.90492 4.0472 6.65424 3.96782 6.39521 3.96782C6.06515 3.96782 5.75181 4.09733 5.52202 4.3313L4.27281 5.57633C3.84666 6.00248 3.78817 6.67513 4.13911 7.16813L4.97471 8.34214C4.74492 8.78082 4.56109 9.23622 4.41904 9.70833L3.03196 9.9423C2.43451 10.0426 2 10.5565 2 11.1623V12.9212C2 13.527 2.43451 14.0409 3.03196 14.1411L4.45246 14.3835C4.59869 14.8514 4.79088 15.3068 5.02484 15.7413L4.20178 16.8861C3.85083 17.3791 3.90515 18.0517 4.33548 18.4779L5.58051 19.7229C5.81448 19.9569 6.12364 20.0864 6.4537 20.0864C6.71274 20.0864 6.95924 20.007 7.16813 19.8566L8.34214 19.021C8.76411 19.2424 9.20698 19.4221 9.66237 19.5641L9.89634 20.9679C9.99661 21.5654 10.5105 21.9999 11.1163 21.9999H12.8794C13.4852 21.9999 13.9991 21.5654 14.0994 20.9679L14.3375 19.5641C14.8096 19.4179 15.265 19.2299 15.6995 19.0001L16.8568 19.8273C17.0657 19.9777 17.3164 20.0571 17.5754 20.0571C17.9055 20.0571 18.2147 19.9276 18.4486 19.6936L19.6936 18.4486C20.1198 18.0225 20.1783 17.3498 19.8273 16.8568L19.0001 15.6953C19.2299 15.2567 19.4221 14.8013 19.5641 14.3333L20.9679 14.0994C21.5654 13.9991 21.9999 13.4852 21.9999 12.8794V11.1205C22.0082 10.5147 21.5737 10.0008 20.9763 9.90052ZM20.8802 12.8794C20.8802 12.9337 20.8426 12.9797 20.7883 12.988L19.0335 13.2805C18.8121 13.3181 18.6366 13.481 18.5823 13.6941C18.4235 14.3083 18.1812 14.8974 17.8553 15.4447C17.7425 15.6369 17.7509 15.875 17.8804 16.0588L18.9124 17.5128C18.9416 17.5545 18.9374 17.6172 18.8998 17.6548L17.6548 18.8998C17.6256 18.9291 17.5963 18.9333 17.5754 18.9333C17.5504 18.9333 17.5295 18.9249 17.5128 18.9124L16.063 17.8804C15.8834 17.7509 15.641 17.7425 15.4488 17.8553C14.9015 18.1812 14.3124 18.4235 13.6983 18.5823C13.481 18.6366 13.3181 18.8163 13.2847 19.0335L12.988 20.7883C12.9797 20.8426 12.9337 20.8802 12.8794 20.8802H11.1205C11.0662 20.8802 11.0202 20.8426 11.0119 20.7883L10.7194 19.0335C10.6818 18.8121 10.5189 18.6366 10.3058 18.5823C9.70833 18.4277 9.13177 18.1896 8.59282 17.8804C8.50508 17.8303 8.40481 17.8052 8.30872 17.8052C8.19591 17.8052 8.07893 17.8386 7.98283 17.9097L6.52055 18.95C6.49966 18.9625 6.47877 18.9709 6.45788 18.9709C6.44117 18.9709 6.40774 18.9667 6.3785 18.9374L5.13347 17.6924C5.09587 17.6548 5.09169 17.5963 5.12093 17.5504L6.14871 16.109C6.27823 15.9251 6.28658 15.6828 6.17378 15.4906C5.8479 14.9475 5.59722 14.3584 5.43846 13.7442C5.37997 13.5312 5.20449 13.3682 4.98724 13.3306L3.21996 13.0298C3.16565 13.0215 3.12805 12.9755 3.12805 12.9212V11.1623C3.12805 11.1079 3.16565 11.062 3.21996 11.0536L4.96217 10.7612C5.1836 10.7236 5.36326 10.5606 5.41757 10.3434C5.57215 9.72922 5.8103 9.13595 6.132 8.58864C6.2448 8.39645 6.23227 8.15831 6.10275 7.97866L5.06244 6.51637C5.0332 6.47459 5.03737 6.41192 5.07498 6.37432L6.32001 5.12929C6.34925 5.10004 6.3785 5.09587 6.39939 5.09587C6.42446 5.09587 6.44535 5.10422 6.46206 5.11676L7.90345 6.14453C8.08728 6.27405 8.32961 6.28241 8.52179 6.1696C9.06493 5.84372 9.65402 5.59304 10.2682 5.43428C10.4813 5.37579 10.6442 5.20031 10.6818 4.98306L10.9826 3.21579C10.991 3.16147 11.0369 3.12387 11.0912 3.12387H12.8502C12.9045 3.12387 12.9504 3.16147 12.9588 3.21579L13.2512 4.95799C13.2888 5.17943 13.4518 5.35908 13.669 5.41339C14.2999 5.57215 14.9015 5.81865 15.4614 6.14871C15.6536 6.26152 15.8917 6.25316 16.0755 6.12364L17.5169 5.08751C17.5378 5.07498 17.5587 5.06662 17.5796 5.06662C17.5963 5.06662 17.6297 5.0708 17.659 5.10004L18.904 6.34508C18.9416 6.38268 18.9458 6.44117 18.9165 6.48713L17.8846 7.93688C17.7551 8.11653 17.7467 8.35885 17.8595 8.55104C18.1854 9.09835 18.4277 9.68744 18.5865 10.3016C18.6408 10.5189 18.8205 10.6818 19.0377 10.7152L20.7925 11.0119C20.8468 11.0202 20.8844 11.0662 20.8844 11.1205V12.8794H20.8802ZM8.81425 11.9979C8.81425 13.7568 10.2431 15.1856 12.002 15.1856C13.761 15.1856 15.1898 13.7568 15.1898 11.9979C15.1898 10.2389 13.761 8.81007 12.002 8.81007C10.2431 8.81007 8.81425 10.2389 8.81425 11.9979Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)" />
  </svg>
);

export default SvgSettings;