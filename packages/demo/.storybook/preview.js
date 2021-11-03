import { addDecorator } from '@storybook/react';
import { PurpleRain, DarkKnight, Grayscale } from '@stylebook/themes';
import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    defaultValue: {
      themes: [Grayscale],
    },
  },
};

addDecorator(withStyleBook);
