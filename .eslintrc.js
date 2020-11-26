module.exports = {
  plugins: ['react', 'prettier'],
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': 0,
    'react/jsx-props-no-spreading': 'off',
  },
  globals: {
    window: true,
    document: true,
    HTMLElement: true,
  },
};
