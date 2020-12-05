import { create } from '@storybook/theming/create';
import { base, fonts, radii } from '../tokens';
import colors from './colors';

const theme = {
  base: base.dark,

  colorSecondary: colors.darkest,
  colorPrimary: colors.darker,
  appBg: colors.darker,

  appContentBg: colors.hue,
  barBg: colors.hue,

  appBorderColor: colors.lighter,
  textColor: colors.lightest,
  textInverseColor: colors.lightest,
  barTextColor: colors.lightest,
  barSelectedColor: colors.lightest,
  inputTextColor: colors.lightest,

  inputBg: colors.white,
  inputBorder: colors.white,

  appBorderRadius: radii.medium,

  fontBase: fonts.sansserif.rubik,
  fontCode: fonts.monospace.firacode,

  inputBorderRadius: radii.medium,
};

export default create(theme);
