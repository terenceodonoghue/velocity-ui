import { Theme } from '@emotion/react';
import { ComponentType } from 'react';

export interface Address {
  streetAddress: string;
  suburb: string;
}

export interface Measurable {
  length: number;
}

interface Metric {
  label: string;
  value: string;
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

export interface Conversation extends Sendable {
  isOnline: boolean;
}

export interface Message extends Sendable {
  isCurrentUser: boolean;
}

export interface Showable {
  show: boolean;
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

export interface ConversationsProps {
  data: Conversation[];
}

export interface DialogProps {
  data: Message[];
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

export interface PaletteProps {
  colors: string[];
}

export interface PassengerProps {
  email: string;
  interactions: number;
  location: string;
  name: string;
  phone: string;
  src: string;
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

export interface TripProps {
  distance: number;
  energy: number;
  from: Address;
  price: number;
  time: number;
  to: Address;
}
