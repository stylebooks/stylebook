import { create } from '@storybook/theming/create';

const PurpleRain = create({
  base: 'dark',

  colorPrimary: '#1E2132',
  colorSecondary: '#171928',

  // UI
  appBg: '#1E2132',
  appContentBg: '#303348',
  appBorderColor: '#5A5F86',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#B1B5D5',
  textInverseColor: '#B1B5D5',

  // Toolbar default and active colors
  barTextColor: '#B1B5D5',
  barSelectedColor: 'red',
  barBg: '#303348',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#B1B5D5',
  inputBorderRadius: 4,
});

// brandTitle: 'My custom storybook',
// brandUrl: 'https://example.com',
// brandImage: 'https://placehold.it/350x150',

export default PurpleRain;
