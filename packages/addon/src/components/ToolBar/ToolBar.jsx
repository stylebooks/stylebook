import React, { useEffect } from 'react';
import { useGlobalTypes } from '@storybook/api';

const components = {
  single: null,
  toggle: <div>a</div>,
  multi: <div>b</div>,
};

const ToolBar = ({ api }) => {
  const { stylebook: { mode = 'single', theme, logo } = {} } = useGlobalTypes();

  const setTheme = () => {
    if (logo) {
      const { img, title, url } = logo;

      theme.brandImage = img;
      theme.brandTitle = title;
      theme.brandUrl = url;
    }

    api.setOptions({
      theme: theme,
    });
  };

  useEffect(() => {
    theme && mode === 'single' && setTheme();
  });

  return theme ? <>{components[mode]}</> : null;
};

export default ToolBar;
