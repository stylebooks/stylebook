import React from 'react';
import { Global, css } from '@emotion/core';

import * as themes from '@stylebook/themes';

const GlobalStyles = ({ currentTheme, children }) => {
  const { fontBase, textColor } = themes[currentTheme];

  const styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

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
