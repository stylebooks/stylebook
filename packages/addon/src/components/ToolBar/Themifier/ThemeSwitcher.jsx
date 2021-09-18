import React, { useContext } from 'react';
import Switch from '../Switch';
import ThemifierContext from './ThemifierContext';

const ThemeSwitcher = () => {
  const { dark, setTheme } = useContext(ThemifierContext);

  return <Switch dark={dark} onClick={() => setTheme(true)} />;
};

export default ThemeSwitcher;
