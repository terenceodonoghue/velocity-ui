import { css, Interpolation, InterpolationWithTheme } from '@emotion/core';
import { Selectable, Showable, Theme } from '~/types';

export const avatar = css`
  height: 40px;
  width: 40px;
`;

export const button = css`
  margin: 0 0 58px;
  width: 40px;
`;

export const drawer = ({ show }: Showable): InterpolationWithTheme<Theme> => (
  theme,
): Interpolation => css`
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 20px;
  width: ${show ? '215px' : '80px'};
  background-color: ${theme.colors.white};
  transition: ${theme.effects.transition};
  overflow-x: hidden;
`;

export const menuHeader = ({
  show,
}: Showable): InterpolationWithTheme<Theme> => (theme): Interpolation => css`
  display: flex;
  margin: 0 0 24px;
  padding: 0 8px;
  width: 215px;
  opacity: ${show ? '1' : '0'};
  transition: ${theme.effects.transition};
`;

export const menuHeaderContent = css`
  margin-left: 10px;
`;

export const name: InterpolationWithTheme<Theme> = (theme) => css`
  display: block;
  color: ${theme.colors.lightBlueGrey};
`;

export const navList = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const navListItem = ({
  selected,
}: Selectable): InterpolationWithTheme<Theme> => (theme) => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: solid 3px ${selected ? theme.colors.blue : 'transparent'};
  height: 56px;
  margin: 0 -20px;
  padding: 0 0 0 25px;
  background-color: ${selected ? 'rgba(46, 91, 255, 0.1)' : null};
  transition: ${theme.effects.transition};
  cursor: pointer;

  & > svg {
    flex-shrink: 0;
  }

  ${!selected &&
  `
    &:hover {
      background-color: rgba(46, 91, 255, 0.1);
    }
  `}
`;

export const navListItemContent = ({
  selected,
  show,
}: Selectable & Showable): InterpolationWithTheme<Theme> => (
  theme,
): Interpolation => css`
  margin-left: 16px;
  color: ${selected ? theme.colors.blue : '#b0bac9'};
  opacity: ${show ? '1' : '0'};
  transition: ${theme.effects.transition};
`;

export const sidebar = ({ show }: Showable): InterpolationWithTheme<Theme> => (
  theme,
) => css`
  position: fixed;
  top: 80px;
  bottom: 0;
  right: ${show ? 0 : '-357px'};
  margin: 0;
  width: 357px;
  transition: ${theme.effects.transition};
`;

export const sidebarAvatar = css`
  display: block;
  height: 140px;
  margin: 32px auto 19px;
  width: 140px;
`;

export const sidebarButton = css`
  flex: 1;
  margin: 0 8px;
  width: unset;
`;

export const sidebarButtons = css`
  display: flex;
  margin: 0 -8px 40px;
`;

export const sidebarContent = ({
  show,
}: Showable): InterpolationWithTheme<Theme> => (theme) => css`
  opacity: ${show ? 1 : 0};
  transition: ${theme.effects.transition};
`;

export const sidebarDivider = css`
  border: 0;
  height: 1px;
  margin-bottom: 42px;
  background-color: #e4e8f0;
`;

export const sidebarFieldLabel = css`
  color: #b0bac9;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const sidebarFieldValue = css`
  margin: 0 0 24px;
  line-height: 1.47;
`;

export const sidebarJobTitle: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0 0 33px;
  color: ${theme.colors.blueyGrey};
  font-size: ${theme.typography.baseFontSize};
  font-weight: ${theme.typography.fontWeightRegular};
  text-align: center;
`;

export const sidebarName: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0 0 3px;
  font-size: 28px;
  font-weight: ${theme.typography.fontWeightLight};
  text-align: center;
`;
