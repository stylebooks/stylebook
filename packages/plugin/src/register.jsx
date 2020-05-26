import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'stylebookPanel';
const PARAM_KEY = 'stylebookAddon';
const PANEL_ID = `${ADDON_ID}/panel`;
const PANEL_TITLE = 'Stylebook';

const MyPanel = () => <div>stylebook panel</div>;

addons.register(ADDON_ID, () => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <MyPanel />
    </AddonPanel>
  );

  addons.add(PANEL_ID, {
    type: types.PANEL,
    PANEL_TITLE,
    render,
    paramKey: PARAM_KEY,
  });
});
