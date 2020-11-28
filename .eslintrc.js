module.exports = {
  plugins: ['react', 'prettier'],
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': 0,
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
  },
  globals: {
    window: true,
    document: true,
    HTMLElement: true,
  },
};
