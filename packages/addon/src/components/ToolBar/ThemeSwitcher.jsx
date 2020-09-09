import React, { useState, useEffect } from 'react';
import { addons } from '@storybook/addons';
import { SET_STORIES } from '@storybook/core-events';

const components = {
  single: null,
  toggle: <div>toggle component</div>,
  multi: <div>multi component</div>,
};

const ThemeSwitcher = ({ api }) => {
  const channel = addons.getChannel();

  const initialState = { mode, theme, logo, splash };
  const [globalTypes, setGlobalTypes] = useState(initialState);

  channel.on(
    SET_STORIES,
    ({
      globalParameters: {
        globalTypes: { stylebook },
      },
    }) => {
      setGlobalTypes(stylebook);
      channel.emit('setGlobalTypes', stylebook);
    }
  );

  const { mode = 'single', theme, logo, splash } = globalTypes;

  const setTheme = () => {
    if (logo) {
      const { img, title = 'Storybook', url = '/' } = logo;
      theme.brandImage = img;
      theme.brandTitle = title;
      theme.brandUrl = url;
    }

    if (splash) {
      theme.splash = splash;
    }

    api.setOptions({
      theme: theme,
    });
  };

  useEffect(() => {
    theme && mode === 'single' && setTheme();
  });

  return globalTypes && <>{components[mode]}</>;
};

export default ThemeSwitcher;
