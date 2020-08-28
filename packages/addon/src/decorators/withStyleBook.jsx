import React from 'react';
import { makeDecorator } from '@storybook/addons';
import { GlobalStyle } from '../components';

const withStyleBook = makeDecorator({
  name: 'withSomething',
  parameterName: 'something',
  wrapper: (storyFn, context) => {
    return <GlobalStyle>{storyFn(context)}</GlobalStyle>;
  },
});

export default withStyleBook;
