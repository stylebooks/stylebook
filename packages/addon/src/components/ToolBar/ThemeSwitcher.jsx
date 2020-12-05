import React, { useState, useEffect } from 'react';
import { shape, func } from 'prop-types';
import { addons } from '@storybook/addons';
import { SET_STORIES } from '@storybook/core-events';
import { MODES } from '../../constants';

const components = {
  single: <div>single component</div>,
  toggle: <div>toggle component</div>,
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

  return globalTypes ? components[globalTypes.mode] : null;
};

ThemeSwitcher.propTypes = {
  api: shape({
    setOptions: func,
  }).isRequired,
};

export default ThemeSwitcher;
