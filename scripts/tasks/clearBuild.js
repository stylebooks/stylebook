const rimraf = require('rimraf');

module.exports = (buildFolder) => {
  rimraf.sync(buildFolder);
};
