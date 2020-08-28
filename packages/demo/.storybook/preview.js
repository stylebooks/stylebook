import { addDecorator } from '@storybook/react';
import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    mode: 'single',
    theme: 'PurpleRain',
  },
};

addDecorator(withStyleBook);
