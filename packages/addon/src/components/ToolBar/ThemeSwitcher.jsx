import React, { useEffect, useContext } from 'react';
import { useGlobals } from '@storybook/api';

import Switch from './Switch';
import ToolbarContext from './ToolbarContext';

const ThemeComponent = ({
  config: {
    themes: { length },
  },
}) => (length > 1 ? <Switch /> : null);

const ThemeSwitcher = () => {
  const { api } = useContext(ToolbarContext);

  const [globals] = useGlobals();
  const { stylebook } = globals;

  const setTheme = (config) => {
    const { themes, theme = themes[0], logo = {} } = config;

    const {
      src: brandImage,
      title: brandTitle = 'Storybook',
      url: brandUrl = '/',
    } = logo;

    api.setOptions({
      theme: {
        ...theme,
        ...(logo.src && { brandImage }),
        ...(logo.title && { brandTitle }),
        ...(logo.url && { brandUrl }),
      },
    });

    // channel.emit('setGlobalTypes', config);
  };

  useEffect(() => stylebook && setTheme(stylebook));

  return stylebook ? <ThemeComponent config={stylebook} /> : null;
};

export default ThemeSwitcher;
