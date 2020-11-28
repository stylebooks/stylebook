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
    theme: { appBg, textColor } = {},
    splash: { src, width } = {},
  } = config;

  channel.on('setGlobalTypes', (params) => setConfig(params));

  return splashRender ? (
    <Overlay
      background={appBg}
      onAnimationEnd={() => toggleSplashRender(false)}
    >
      {appBg && <Logo textColor={textColor} src={src} width={width} />}
    </Overlay>
  ) : (
    false
  );
};

export default Splash;
