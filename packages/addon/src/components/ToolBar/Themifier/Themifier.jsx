import React, { useEffect, useContext } from 'react';
import { useGlobals } from '@storybook/api';

import ToolbarContext from '../ToolbarContext';
import ThemeSwitcher from './ThemeSwitcher';

const Themifier = () => {
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

  return stylebook ? <ThemeSwitcher config={stylebook} /> : null;
};

export default Themifier;
