import { addDecorator } from '@storybook/react';
import { PurpleRain, DarkKnight, Grayscale } from '@stylebook/themes';
import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    defaultValue: {
      themes: [Grayscale],
      logo: {
        src: './logo.png',
        title: 'stylebook',
        url: '/',
      },
      splash: {
        src: './logo.png',
        width: 200,
      },
    },
  },
};

addDecorator(withStyleBook);
