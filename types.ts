import { ComponentType, HTMLProps } from 'react';

interface Driver {
  src: string;
  name: string;
  vehicle: string;
  earnings: number;
  distance: number;
}

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

export interface Themeable {
  theme?: Theme;
}

export interface CardProps extends HTMLProps<HTMLDivElement> {
  heading?: string;
}

export interface DrawerProps {
  name: string;
  src: string;
}

export interface IconProps extends Resizeable, Themeable {
  fill?: string;
  title?: string;
}

export interface NavListItemProps extends Selectable, Showable {
  href: string;
  icon: ComponentType<IconProps>;
  label: string;
}

export interface TopDriversProps {
  drivers: Driver[];
}
