const { clearBuild } = require('./tasks');
const [, , buildFolder] = process.argv;

(() => {
  clearBuild(buildFolder);
})();
