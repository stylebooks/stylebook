import React from 'react';
import { makeDecorator } from '@storybook/addons';
import { GlobalStyle } from '../components';

const withStyleBook = makeDecorator({
  name: 'withStyleBook',
  wrapper: (Story, context) => {
    const {
      parameters: {
        globalTypes: {
          stylebook: { theme },
        },
      },
    } = context;

    return <GlobalStyle currentTheme={theme}>{Story(context)}</GlobalStyle>;
  },
});

export default withStyleBook;
