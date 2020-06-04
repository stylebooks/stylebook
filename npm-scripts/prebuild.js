const { resolve } = require('path');
const { writeFileSync } = require('fs');
const [, , buildFolder] = process.argv;

(() => {
  console.log('buildFolder', buildFolder);
})(buildFolder);
