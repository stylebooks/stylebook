import React from 'react';
import { addons, types } from '@storybook/addons';

import { ADDON_ID, PANEL_ID } from './constants';
import { ToolBar } from './components';

import listenChannel from './events';

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();

  addons.add(PANEL_ID, {
    title: PANEL_ID,
    type: types.TOOL,
    match: () => true,
    render: () => <ToolBar api={api} />,
  });

  listenChannel(channel);
});
