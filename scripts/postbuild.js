const { formatPackage, copyFiles } = require('./tasks');
const [, , buildFolder] = process.argv;

(() => {
  formatPackage(buildFolder);
  copyFiles([
    {
      name: 'README.md',
      from: './',
      to: buildFolder,
    },
    {
      name: 'LICENSE',
      from: '../../',
      to: buildFolder,
    },
  ]);
})();
