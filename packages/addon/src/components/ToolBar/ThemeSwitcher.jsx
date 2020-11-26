import React, { useState, useEffect } from 'react';
import { shape, func } from 'prop-types';
import { addons } from '@storybook/addons';
import { SET_STORIES } from '@storybook/core-events';

// const components = {
//   single: null,
//   toggle: <div>toggle component</div>,
//   multi: <div>multi component</div>,
// };

const ThemeSwitcher = ({ api }) => {
  const channel = addons.getChannel();
  const [globalTypes, setGlobalTypes] = useState();

  channel.on(
    SET_STORIES,
    ({
      globalParameters: {
        globalTypes: { stylebook },
      },
    }) => {
      setGlobalTypes(stylebook);
    },
  );

  const setTheme = () => {
    const { theme, logo = {} } = globalTypes;
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

    channel.emit('setGlobalTypes', globalTypes);
  };

  const initToolBar = () =>
    globalTypes && globalTypes.mode === 'single' && setTheme();

  useEffect(() => initToolBar());

  return globalTypes ? <></> : null;
};

ThemeSwitcher.propTypes = {
  api: shape({
    setOptions: func,
  }).isRequired,
};

export default ThemeSwitcher;
