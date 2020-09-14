import { css, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '~/types';

export const gitHubCorner = css`
  position: sticky;
  top: 0;
  z-index: 1;

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

export const global: InterpolationWithTheme<Theme> = (theme) => css`
  :any-link {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: rgba(46, 91, 255, 0.08);
    color: ${theme.colors.black};
    font-family: ${theme.typography.baseFontFamily};
    font-size: ${theme.typography.baseFontSize};
  }

  main {
    position: relative;
    margin-left: 80px;
    max-width: 1360px;
    padding: 64px 110px;
  }

  h1 {
    margin-top: 0;
    font-style: normal;
    font-weight: ${theme.typography.fontWeightLight};
    font-size: 28px;
    line-height: 1.14em;
    color: ${theme.colors.black};
  }
`;
