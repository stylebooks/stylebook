import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './constants';

import PurpleRain from '@stylebook/themes';

const StylebookPanel = ({ api }) => {
  const setTheme = () => {
    api.setOptions({
      theme: PurpleRain,
    });
  };
  return <div onClick={setTheme}>Change theme</div>;
};

addons.register(ADDON_ID, (api) =>
  addons.add(PANEL_ID, {
    title: PANEL_ID,
    type: types.TOOL,
    match: () => true,
    render: () => <StylebookPanel api={api} />,
  })
);
