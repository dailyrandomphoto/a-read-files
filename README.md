# a-read-files

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![code style: prettier][code-style-prettier-image]][code-style-prettier-url]

Read files from a directory.

## Installation

```sh
npm install a-read-files
```

## Usages

```js
const readfiles = require("a-read-files");

readfiles("/foo/bar/", {
  onFileContent: function (filename, content) {
    console.log(content);
  },
});
```

## Related

- [node-readfiles](https://github.com/guatedude2/node-readfiles) - A lightweight node.js module to recursively read files in a directory using ES6 Promises.

## License

Copyright (c) 2020 [dailyrandomphoto][my-url]. Licensed under the [MIT license][license-url].

[my-url]: https://github.com/dailyrandomphoto
[npm-url]: https://www.npmjs.com/package/a-read-files
[travis-url]: https://travis-ci.org/dailyrandomphoto/a-read-files
[license-url]: LICENSE
[code-style-prettier-url]: https://github.com/prettier/prettier
[npm-downloads-image]: https://img.shields.io/npm/dm/a-read-files
[npm-version-image]: https://img.shields.io/npm/v/a-read-files
[license-image]: https://img.shields.io/npm/l/a-read-files
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/a-read-files
[code-style-prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
