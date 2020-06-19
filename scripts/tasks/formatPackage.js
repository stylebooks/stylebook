const { resolve } = require('path');
const { writeFileSync } = require('fs');

module.exports = (buildFolder) => {
  const packageFile = require(resolve('./package.json'));
  const { main, scripts, ...jsonFile } = packageFile;

  Object.assign(jsonFile, {
    private: false,
    main: './dist/cjs',
    module: './dist/esm',
  });

  writeFileSync(`${buildFolder}/package.json`, JSON.stringify(jsonFile));
};
