'use strict';

const { readdir, readFile } = require('fs');
const { resolve } = require('path');

module.exports = function (
  dirname,
  {
    onFileContent = () => {},
    onError = (err) => {
      throw err;
    },
    compareFn,
    matchFn,
    readContents = true
  }
) {
  readdir(dirname, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }

    if (matchFn) {
      // Do filtering
    }

    filenames.sort(compareFn).forEach((filename) => {
      if (readContents) {
        readFile(resolve(dirname, filename), 'utf-8', (err, content) => {
          if (err) {
            onError(err);
            return;
          }

          onFileContent(filename, content);
        });
      } else {
        onFileContent(filename);
      }
    });
  });
};
