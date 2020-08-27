import { makeDecorator } from '@storybook/addons';

const withStyleBook = makeDecorator({
  name: 'withSomething',
  parameterName: 'something',
  wrapper: (storyFn, context, { parameters }) => {
    console.log('decorou');
    return storyFn(context);
  },
});

export default withStyleBook;
