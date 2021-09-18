import React from 'react';
import { makeDecorator } from '@storybook/addons';
import { GlobalStyle } from '../components';

const withStyleBook = makeDecorator({
  name: 'withStyleBook',
  wrapper: (Story, context) => {
    const {
      parameters: {
        globalTypes: {
          stylebook: {
            defaultValue: { themes, currentTheme = themes[0] },
          },
        },
      },
    } = context;

    return (
      <>
        <GlobalStyle currentTheme={currentTheme} />
        <Story {...context} />
      </>
    );
  },
});

export default withStyleBook;
