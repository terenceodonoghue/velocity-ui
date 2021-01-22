import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { rgba } from 'polished';

export const avatar = css`
  height: 40px;
  width: 40px;
`;

export const row = css`
  display: flex;
`;

export const topDriver = css`
  position: relative;
  display: flex;
  margin: 12px 0;
  line-height: 1.47em;
`;

export const topDrivers = css`
  padding: 32px 24px 15px;
`;

export const topDriverAvatar = css`
  vertical-align: middle;
  height: 48px;
  width: 48px;
`;

export const topDriverDetails = css`
  flex: 1;

  & > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`;

export const topDriverName: FunctionInterpolation<Theme> = ({
  typography,
}) => css`
  font-weight: ${typography.fontWeight.medium};
`;

export const topDriverRank = (
  position: number,
): FunctionInterpolation<Theme> => ({ palette, typography }) => css`
  margin: 0 16px 0 0;

  &::after {
    content: '${position}';
    position: absolute;
    top: 0;
    left: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    box-shadow: 0 3px 10px ${rgba(palette.accent, 0.297866)};
    background: ${palette.neutral[50]};
    color: ${palette.neutral[700]};
    font-size: 66.67%;
    font-weight: ${typography.fontWeight.medium};
  }
`;

export const topDriverVehicle: FunctionInterpolation<Theme> = ({
  palette,
}) => css`
  color: ${palette.neutral[600]};
`;

export const welcomeContent = css`
  margin-left: 60px;
`;

export const welcomeHeading: FunctionInterpolation<Theme> = ({
  typography,
}) => css`
  margin: 0 0 13px;
  width: 135px;
  font-size: 28px;
  font-weight: ${typography.fontWeight.light};
  line-height: 1.14;
`;

export const welcomeText: FunctionInterpolation<Theme> = ({ palette }) => css`
  margin: 0;
  color: ${palette.neutral[600]};
`;

export const test = css`
  transform: translateY(100px);
`;
