import { addDecorator } from '@storybook/react';
import { PurpleRain } from '@stylebook/themes';

import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    mode: 'single',
    theme: PurpleRain,
    logo: {
      img: 'https://placehold.it/350x150',
      title: 'Stylebook',
      url: '/',
    },
  },
};

addDecorator(withStyleBook);
