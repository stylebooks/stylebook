const rimraf = require('rimraf');
const [, , buildFolder] = process.argv;

(() => {
  rimraf.sync(buildFolder);
})(buildFolder);
