import { colors as tokenColors } from '../tokens';

const colors = {
  purple: ['#B1B5D5', '#5A5F86', '#303348', '#1E2132', '#171928'],
  magenta: ['#B452C8'],
};

[
  colors.purple.lavender,
  colors.purple.comet,
  colors.purple.ebonyclay,
  colors.purple.darkebonyclay,
  colors.purple.mirage,
] = colors.purple;

[colors.magenta.amethyst] = colors.magenta;

export default {
  ...tokenColors,
  ...colors,
};
