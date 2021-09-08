import React from 'react';
import Switch from '../Switch';

const ThemeSwitcher = ({
  config: {
    themes: { length },
  },
}) => (length > 1 ? <Switch /> : null);

export default ThemeSwitcher;
