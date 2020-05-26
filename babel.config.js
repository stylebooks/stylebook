module.exports = {
  env: {
    esm: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
    },
    cjs: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
};
