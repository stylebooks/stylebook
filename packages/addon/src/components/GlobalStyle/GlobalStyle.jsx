import React from 'react';
import { Global, css } from '@emotion/core';

import * as themes from '@stylebook/themes';

const GlobalStyles = ({ currentTheme, children }) => {
  const { fontBase, fontCode, textColor } = themes[currentTheme];
  const urlFont = (font) => font.replace(/ /g, '+');

  const styles = css`
    @import url('https://fonts.googleapis.com/css2?family=${urlFont(
      fontBase
    )}&family=${urlFont(fontCode)}&display=swap');

    body {
      font-family: ${fontBase};
      color: ${textColor};
    }
  `;

  return (
    <>
      <Global styles={styles} />
      {children}
    </>
  );
};

export default GlobalStyles;
