import React from 'react';
import Themifier from './Themifier';
import ToolbarContext from './ToolbarContext';

const ToolBar = (api) => (
  <ToolbarContext.Provider value={api}>
    <Themifier />
  </ToolbarContext.Provider>
);

export default ToolBar;
