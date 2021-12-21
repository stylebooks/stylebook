import React, { useState, useEffect, useContext } from 'react';
import { useGlobals } from '@storybook/api';
import { addons } from '@storybook/addons';
import ToolbarContext from '../ToolbarContext';
import ThemifierContext from './ThemifierContext';
import ThemeSwitcher from './ThemeSwitcher';

const Themifier = () => {
  const channel = addons.getChannel();
  const { api } = useContext(ToolbarContext);
  const [{ stylebook }] = useGlobals();
  const [dark, setDark] = useState(true);

  const setTheme = (changeState) => {
    const { themes, logo = {} } = stylebook;
    const currentTheme = dark ? themes[0] : themes[1];

    const {
      src: brandImage,
      title: brandTitle = 'Storybook',
      url: brandUrl = '/',
    } = logo;

    const theme = {
      ...currentTheme,
      ...(logo.src && { brandImage }),
      ...(logo.title && { brandTitle }),
      ...(logo.url && { brandUrl }),
    };

    api.setOptions({ theme });

    channel.emit('setGlobalTypes', stylebook);

    if (changeState) {
      setDark(!dark);
      channel.emit('setTheme', dark ? themes[1] : themes[0]);
    }
  };

  useEffect(() => stylebook && setTheme());

  return stylebook && stylebook.themes.length > 1 ? (
    <ThemifierContext.Provider value={{ dark, setTheme }}>
      <ThemeSwitcher />
    </ThemifierContext.Provider>
  ) : null;
};

export default Themifier;
