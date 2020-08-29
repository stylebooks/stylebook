import { create } from '@storybook/theming/create';
import { base, fonts, radii } from '../tokens';
import colors from './colors';

const { purple, gray } = colors;

const theme = {
  base: base.dark,

  colorPrimary: purple.darkebonyclay,
  colorSecondary: purple.mirage,
  appBg: purple.darkebonyclay,
  appBorderColor: purple.comet,
  textColor: purple.lavender,
  textInverseColor: purple.mirage,

  fontBase: `${fonts.kronaone}, ${fonts.sansserif}`,
  fontCode: fonts.monospace,

  appContentBg: purple.ebonyclay,
  appBorderRadius: radii.medium,

  barTextColor: purple.lavender,
  barSelectedColor: magenta.amethyst,
  barBg: purple.ebonyclay,

  inputBg: gray.white,
  inputBorder: gray.silver,
  inputTextColor: purple.mirage,
  inputBorderRadius: radii.medium,
};

export default create(theme);
