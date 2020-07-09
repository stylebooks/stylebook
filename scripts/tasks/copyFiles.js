const { resolve } = require('path');
const { copyFile } = require('fs');

module.exports = (files) =>
  files.forEach(({ name, from, to }) =>
    copyFile(resolve(`${from}/${name}`), resolve(`${to}/${name}`), () => null)
  );
