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
    register: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        [
          'transform-rename-import',
          { original: './src', replacement: './dist/cjs' },
        ],
      ],
    },
  },
};
