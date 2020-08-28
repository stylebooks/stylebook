import React from 'react';
import { Global, css } from '@emotion/core';
import { useGlobalTypes } from '@storybook/api';

const GlobalStyles = ({ children }) => {
  const {
    stylebook: {
      theme: { fontBase, textColor },
    },
  } = useGlobalTypes();

  const styles = css`
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
