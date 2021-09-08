import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import ToolbarContext from './ToolbarContext';

const ToolBar = (api) => (
  <ToolbarContext.Provider value={api}>
    <ThemeSwitcher />
  </ToolbarContext.Provider>
);

export default ToolBar;
