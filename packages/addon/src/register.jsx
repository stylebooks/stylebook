import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './constants';

const StylebookPanel = () => <div>stylebook panel</div>;

addons.register(ADDON_ID, (api) =>
  addons.add(PANEL_ID, {
    title: PANEL_ID,
    type: types.TOOL,
    match: () => true,
    render: () => <StylebookPanel />,
  })
);
