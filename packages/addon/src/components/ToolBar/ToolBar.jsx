import React, { useEffect } from 'react';
import { useGlobalTypes } from '@storybook/api';

import * as themes from '@stylebook/themes';

const ToolBar = ({ api }) => {
  const defaults = { mode: 'default', theme: 'StyleBook' };
  const { stylebook: { mode, theme } = defaults } = useGlobalTypes();

  const setTheme = () =>
    api.setOptions({
      theme: themes[theme],
    });

  const components = {
    single: null,
    toggle: <div>a</div>,
    multi: <div>b</div>,
    default: null,
  };

  useEffect(() => mode.single && setTheme());

  return components[mode];
};

export default ToolBar;
