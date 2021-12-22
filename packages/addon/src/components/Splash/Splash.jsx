import React, { useState } from 'react';
import { addons } from '@storybook/addons';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import Logo from './Logo';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: ${({ background }) => background || '#FFFFFF'};
  z-index: 2;

  animation: ${fadeOut} 0.5s 1 1.5s alternate both;
`;

const Splash = () => {
  const channel = addons.getChannel();
  const [config, setConfig] = useState({});

  const [splashRender, toggleSplashRender] = useState(true);
  const {
    themes = [],
    theme = themes[0],
    splash: { src, width } = {},
  } = config;

  const { appBg, textColor } = theme || {};

  channel.on('setGlobalTypes', (params) => {
    setConfig(params);
  });

  return config && splashRender ? (
    <Overlay
      background={appBg}
      onAnimationEnd={() => toggleSplashRender(false)}
    >
      {appBg && src && <Logo textColor={textColor} src={src} width={width} />}
    </Overlay>
  ) : (
    false
  );
};

export default Splash;
