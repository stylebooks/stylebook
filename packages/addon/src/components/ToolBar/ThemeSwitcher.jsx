import React, { useState, useEffect } from 'react';
import { shape, func } from 'prop-types';
import { addons } from '@storybook/addons';
import { SET_STORIES } from '@storybook/core-events';
import { MODES } from '../../constants';

import Switch from './Switch';

const components = {
  single: <div>single component</div>,
  toggle: <Switch />,
  multi: <div>multi component</div>,
};

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
      const {
        themes: {
          length,
          themeCount = length < 3 ? length : 3,
          mode = MODES[themeCount - 1],
        },
      } = stylebook;

      const stylebookGlobals = {
        ...stylebook,
        mode,
      };

      setGlobalTypes(stylebookGlobals);
    },
  );

  const setTheme = () => {
    const { themes, theme = themes[0], logo = {} } = globalTypes;
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

  useEffect(() => globalTypes && setTheme());

  return globalTypes ? components[globalTypes.mode] : null;
};

ThemeSwitcher.propTypes = {
  api: shape({
    setOptions: func,
  }).isRequired,
};

export default ThemeSwitcher;
