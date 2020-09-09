import { addDecorator } from '@storybook/react';
import { PurpleRain } from '@stylebook/themes';

import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    mode: 'single',
    theme: PurpleRain,
  },
};

addDecorator(withStyleBook);
