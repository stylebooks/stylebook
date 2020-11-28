const withShades = (colors) => {
  const shades = [
    'i50',
    'i100',
    'i200',
    'i300',
    'i400',
    'i500',
    'i600',
    'i700',
    'i800',
    'i900',
  ];

  Object.values(colors)
    .sort((a, b) => a - b)
    .forEach((tokenList) =>
      tokenList.forEach((color, index) => {
        tokenList[shades[index]] = color;
      }),
    );

  return colors;
};

export default withShades;
