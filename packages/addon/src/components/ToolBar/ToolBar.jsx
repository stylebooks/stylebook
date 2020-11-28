import React, { memo } from 'react';
import { shape } from 'prop-types';
import ThemeSwitcher from './ThemeSwitcher';

const ToolBar = ({ api }) => <ThemeSwitcher api={api} />;

ToolBar.propTypes = {
  api: shape({}).isRequired,
};

export default memo(ToolBar);
