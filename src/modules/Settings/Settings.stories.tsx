import React, { FunctionComponent } from 'react';
import * as Settings from './Settings';

export default {
  title: 'Modules/Settings',
};

export const PersonalData: FunctionComponent = () => <Settings.Personal />;

export const Integrations: FunctionComponent = () => <Settings.Integrations />;

export const Notifications: FunctionComponent = () => (
  <Settings.Notifications />
);

export const Theme: FunctionComponent = () => <Settings.Theme />;
