import { addDecorator } from '@storybook/react';

import { PurpleRain, DarkKnight } from '@stylebook/themes';
import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    themes: [DarkKnight, PurpleRain],
  },
};

addDecorator(withStyleBook);
