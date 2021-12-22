import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import { addons } from '@storybook/addons';

import { Global, css } from '@emotion/core';

const GlobalStyles = ({ currentTheme }) => {
  const urlFont = (font) => font.replace(/ /g, '+');
  const channel = addons.getChannel();

  const [themeProps, setThemeProps] = useState({
    ...currentTheme,
  });

  channel.once('setTheme', (appliedTheme) => {
    setThemeProps({
      ...appliedTheme,
    });
  });

  const { fontBase, fontCode, textColor, appContentBg } = themeProps;

  const fontUrl = `https://fonts.googleapis.com/css2?family=${urlFont(
    fontBase,
  )}&family=${urlFont(fontCode)}&display=swap`;

  const transition = css`
    transition: all 0.4s ease-out;
  `;

  const globalCss = css`
    @import url(${fontUrl});

    body {
      font-family: ${fontBase};
      color: ${textColor};
      ${transition};
    }
    .os-host {
      ${transition};
      span:empty {
        ${transition};
      }
    }
    .sb-show-main {
      background-color: ${appContentBg};
      ${transition};
    }

    .sidebar-item {
      ${transition};
      svg {
        ${transition};
        path {
          fill: ${textColor};
        }
      }
    }
  `;

  return <Global styles={globalCss} />;
};

GlobalStyles.propTypes = {
  currentTheme: shape({
    fontBase: string,
    fontCode: string,
    textColor: string,
    appContentBg: string,
  }).isRequired,
};

export default GlobalStyles;
