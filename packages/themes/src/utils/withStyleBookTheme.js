import { create } from '@storybook/theming/create';

const withStyleBookTheme = ({ base, main, preview, toolbar, input }) =>
  create({
    base: base.dark,

    colorPrimary: main.primary,
    colorSecondary: main.secondary,
    appBg: main.background,
    appBorderColor: main.border,
    textColor: main.text,
    textInverseColor: main.invertedText,

    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    appContentBg: preview.background,
    appBorderRadius: 4,

    barTextColor: toolbar.text,
    barSelectedColor: toolbar.selectedText,
    barBg: toolbar.background,

    inputBg: input.background,
    inputBorder: input.border,
    inputTextColor: input.text,
    inputBorderRadius: 4,
  });

export default withStyleBookTheme;
