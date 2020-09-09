import React, { memo } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const ToolBar = ({ api }) => <ThemeSwitcher api={api} />;

export default memo(ToolBar);
