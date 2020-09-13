import { ComponentType, HTMLProps } from 'react';

interface Driver {
  src: string;
  name: string;
  vehicle: string;
  earnings: number;
  distance: number;
}

interface Metric {
  label: string;
  value: string;
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

export interface Sizable {
  fullWidth?: boolean;
  size?: number;
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

export interface Ticket {
  date: string;
  name: string;
  price: string;
  type: string;
}

export interface BaseIconProps extends Resizeable {
  title?: string;
}

export type CardProps = HTMLProps<HTMLDivElement> &
  Sizable & {
    heading?: string;
  };

export interface DrawerProps {
  name: string;
  src: string;
}

export interface IconProps extends BaseIconProps, Themeable {
  fill?: string;
}

export interface IntegrationProps extends Selectable {
  description: string;
  icon: ComponentType<IconProps>;
  name: string;
}

export interface KanbanProps {
  data: Ticket[][];
}

export interface MetricsProps {
  data: Metric[];
}

export interface NavListItemProps extends Selectable, Showable {
  href: string;
  icon: ComponentType<IconProps>;
  label: string;
}

export interface PageHeaderProps {
  heading: string;
}

export interface PaletteProps {
  colors: string[];
}

export interface SidebarProps {
  bio: string;
  email: string;
  jobTitle: string;
  location: string;
  name: string;
  phone: string;
  roles: string;
  show: boolean;
  src: string;
}

export interface TopDriversProps {
  drivers: Driver[];
}
