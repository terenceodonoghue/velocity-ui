import { css, Interpolation, InterpolationWithTheme } from '@emotion/core';
import { Selectable, Showable, Theme } from '~/types';

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
}: Selectable): InterpolationWithTheme<Theme> => (theme): Interpolation => css`
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
