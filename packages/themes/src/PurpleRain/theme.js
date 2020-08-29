import { create } from '@storybook/theming/create';

import colors from './colors';
import { fonts, radii } from '../tokens';

const theme = {
  base: 'dark',

  colorPrimary: colors.purple.darkebonyclay,
  colorSecondary: colors.purple.mirage,
  appBg: colors.purple.darkebonyclay,
  appBorderColor: colors.purple.comet,
  textColor: colors.purple.lavender,
  textInverseColor: colors.purple.mirage,

  fontBase: `${fonts.kronaone}, ${fonts.sansserif}`,
  fontCode: fonts.monospace,

  appContentBg: colors.purple.ebonyclay,
  appBorderRadius: radii.medium,

  barTextColor: colors.purple.lavender,
  barSelectedColor: colors.magenta.amethyst,
  barBg: colors.purple.ebonyclay,

  inputBg: colors.gray.white,
  inputBorder: colors.gray.silver,
  inputTextColor: colors.purple.mirage,
  inputBorderRadius: radii.medium,
};

export default create(theme);
