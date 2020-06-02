import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { ADDON_ID, PARAM_KEY, PANEL_ID, PANEL_TITLE } from './constants';

const StylebookPanel = () => <div>stylebook panel</div>;

addons.register(ADDON_ID, () => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <StylebookPanel />
    </AddonPanel>
  );

  addons.add(PANEL_ID, {
    render,
    type: types.PANEL,
    title: PANEL_TITLE,
    paramKey: PARAM_KEY,
  });
});
