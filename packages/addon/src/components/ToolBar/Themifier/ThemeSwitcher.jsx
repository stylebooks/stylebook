import React from 'react';
import Switch from '../Switch';

const ThemeSwitcher = ({ config: { themes } }) =>
  themes.length > 1 ? <Switch /> : null;

export default ThemeSwitcher;
