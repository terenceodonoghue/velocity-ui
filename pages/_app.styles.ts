import { css, FunctionInterpolation, Theme } from '@emotion/react';

export const avatarIconButton = css`
  border-radius: 50%;
  height: 44px;
  margin-right: 83px;
  width: 44px;
`;

export const gitHubCorner = css`
  position: sticky;
  top: 0;
  z-index: 300;

  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }

  @media (max-width: 500px) {
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }

    .github-corner:hover .octo-arm {
      animation: none;
    }
  }
`;

export const menuIcon = css`
  height: 16px;
  width: 18px;
`;

export const menuIconButton: FunctionInterpolation<Theme> = ({
  palette,
}) => css`
  color: ${palette.neutral[400]};
  height: 28px;
  width: 28px;
`;

export const velocityIcon = css`
  cursor: pointer;
  height: 28px;
  margin-left: 137px;
  width: 102px;
`;

// to keep
export const navAvatar = css`
  margin-right: 8px;
`;

export const navHeader: FunctionInterpolation<Theme> = ({ transitions }) => css`
  display: flex;
  margin: 27px 0 34px;
  padding-left: 28px;
  transition: opacity ${transitions.duration.standard}ms
    ${transitions.easing.easeInOut};
`;

export const navText: FunctionInterpolation<Theme> = ({ transitions }) => css`
  transition: opacity ${transitions.duration.standard}ms
    ${transitions.easing.easeInOut};
`;

export const navUser: FunctionInterpolation<Theme> = ({ palette }) => css`
  display: block;
  color: ${palette.neutral[400]};
  white-space: nowrap;
`;
