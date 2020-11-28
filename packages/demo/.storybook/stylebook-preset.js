module.exports = {
  managerWebpack: async (config, options) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/preset-react'],
      },
    });
    config.resolve.extensions.push('.js', '.jsx');
    return config;
  },
  stories: ['../src/**/*.stories.jsx'],
  addons: ['@stylebook/addon'],
};
