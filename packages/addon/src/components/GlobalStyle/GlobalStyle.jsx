import React from 'react';
import { shape, string } from 'prop-types';

import { Global, css } from '@emotion/core';

const GlobalStyles = ({ currentTheme }) => {
  const { fontBase, fontCode, textColor, appContentBg } = currentTheme;
  const urlFont = (font) => font.replace(/ /g, '+');

  const styles = css`
    @import url('https://fonts.googleapis.com/css2?family=${urlFont(
      fontBase,
    )}&family=${urlFont(fontCode)}&display=swap');

    body {
      font-family: ${fontBase};
      color: ${textColor};
    }

    .sb-show-main {
      background-color: ${appContentBg};
    }
  `;

  return <Global styles={styles} />;
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
