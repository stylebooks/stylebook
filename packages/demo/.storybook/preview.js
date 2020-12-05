import { addDecorator } from '@storybook/react';

import { DarkKnight } from '@stylebook/themes';
import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    mode: 'single',
    theme: DarkKnight,
    logo: {
      src: 'https://placehold.it/350x150',
      title: 'stylebook',
      url: '/',
    },
    splash: {
      src: 'https://placehold.it/350x150',
      width: 200,
    },
  },
};

addDecorator(withStyleBook);
