import * as Avatars from './Avatar/Avatar';
import * as Buttons from './Button/Button';
import Global, { ThemeProvider } from './Global/Global';
import * as Icons from './Icon/Icon';
import * as Inputs from './Input/Input';
import * as Surfaces from './Surface/Surface';

export interface Measurable {
  length: number;
}

export interface Resizeable {
  size?: number;
}

export interface Selectable {
  selected?: boolean;
}

export interface Sendable {
  message: string;
  name: string;
  src: string;
  time: string;
}

export interface Showable {
  show: boolean;
}

export interface Themeable {
  theme?: Theme;
}

export interface Theme {
  colors: {
    black: string;
    blueyGrey: string;
    blue: string;
    blueDark: string;
    green: string;
    lightBlueGrey: string;
    purple: string;
    red: string;
    teal: string;
    white: string;
    yellow: string;
  };
  effects: {
    transition: string;
  };
  typography: {
    baseFontSize: string;
    baseFontFamily: string;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
  };
}

export { Avatars, Buttons, Global, Icons, Inputs, Surfaces, ThemeProvider };