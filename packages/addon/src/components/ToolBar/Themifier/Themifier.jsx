import React, { useState, useEffect, useContext } from 'react';
import { useGlobals } from '@storybook/api';
import ToolbarContext from '../ToolbarContext';
import ThemifierContext from './ThemifierContext';
import ThemeSwitcher from './ThemeSwitcher';

const Themifier = () => {
  const { api } = useContext(ToolbarContext);
  const [{ stylebook }] = useGlobals();
  const [dark, setDark] = useState(true);

  const setTheme = (changeState) => {
    const { themes, logo = {} } = stylebook;
    const currentTheme = dark ? themes[0] : themes[1];

    console.log(themes);

    const {
      src: brandImage,
      title: brandTitle = 'Storybook',
      url: brandUrl = '/',
    } = logo;

    api.setOptions({
      theme: {
        ...currentTheme,
        ...(logo.src && { brandImage }),
        ...(logo.title && { brandTitle }),
        ...(logo.url && { brandUrl }),
      },
    });

    changeState && setDark(!dark);
  };

  useEffect(() => stylebook && setTheme());

  return stylebook && stylebook.themes.length > 1 ? (
    <ThemifierContext.Provider value={{ dark, setTheme }}>
      <ThemeSwitcher />
    </ThemifierContext.Provider>
  ) : null;
};

export default Themifier;
