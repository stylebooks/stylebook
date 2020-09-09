import React from 'react';
import { render } from 'react-dom';
import { Splash } from '../components';

const handleGlobalStyle = () => {
  const manager = document.head;

  document
    .querySelector('iframe')
    .contentWindow.document.head.querySelectorAll('[data-emotion]')
    .forEach((item) => {
      const style = document.createElement('style');
      style.innerHTML = item.innerHTML;
      style.setAttribute('data-emotion', 'css-global');
      manager.appendChild(style);
    });
};

const renderSplash = () => {
  const splashRoot = document.createElement('div');
  splashRoot.setAttribute('id', 'splash-root');
  render(<Splash />, splashRoot);
  document.body.insertAdjacentElement('afterbegin', splashRoot);
};

export { handleGlobalStyle, renderSplash };
