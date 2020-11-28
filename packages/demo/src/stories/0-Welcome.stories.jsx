import React from 'react';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Test',
  component: Welcome,
};

export const ToStorybook = () => <div>test</div>;

ToStorybook.story = {
  name: 'to Storybook',
};
