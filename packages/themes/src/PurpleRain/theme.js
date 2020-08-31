import { create } from '@storybook/theming/create';
import { base, fonts, radii } from '../tokens';
import { gray, blue } from '../tokens/colors';

const theme = {
  base: base.dark,

  colorPrimary: blue.zircon.i900,
  colorSecondary: blue.darkzircon.i900,

  appBg: blue.zircon.i900,
  appContentBg: blue.titanwhite.i900,
  appBorderColor: blue.titanwhite.i800,
  appBorderRadius: radii.medium,

  fontBase: fonts.sansserif.notosans,
  fontCode: fonts.monospace.firacode,

  textColor: blue.snuff.i100,
  textInverseColor: blue.snuff.i100,

  barTextColor: blue.snuff.i100,
  barSelectedColor: blue.snuff.i100,
  barBg: blue.titanwhite.i900,

  inputBg: gray.alabaster.i50,
  inputBorder: gray.alabaster.i200,
  inputTextColor: blue.snuff.i100,
  inputBorderRadius: radii.medium,
};

export default create(theme);
