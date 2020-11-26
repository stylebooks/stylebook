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
  },
  globals: {
    window: true,
    document: true,
    HTMLElement: true,
  },
};
