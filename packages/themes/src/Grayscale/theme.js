import { create } from '@storybook/theming/create';
import { base, fonts, radii } from '../tokens';
import colors from './colors';

const theme = {
  base: base.light,

  colorSecondary: colors.darker,
  colorPrimary: colors.darkest,
  appBg: colors.lighter,

  appContentBg: colors.white,
  barBg: colors.hue,

  appBorderColor: colors.darker,
  textColor: colors.darkest,
  textInverseColor: colors.darkest,
  barTextColor: colors.darkest,
  barSelectedColor: colors.darkest,
  inputTextColor: colors.lightest,

  inputBg: colors.white,
  inputBorder: colors.white,

  appBorderRadius: radii.medium,

  fontBase: fonts.sansserif.nunito,
  fontCode: fonts.monospace.firacode,

  inputBorderRadius: radii.medium,
};

export default create(theme);
