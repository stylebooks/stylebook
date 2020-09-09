import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './constants';
import { subscribe } from './events';
import { ToolBar } from './components';

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();

  addons.add(PANEL_ID, {
    title: PANEL_ID,
    type: types.TOOL,
    match: () => true,
    render: () => <ToolBar api={api} />,
  });

  subscribe(channel);
});
