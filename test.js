'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;
const lib = require('a-read-files');

describe('a-read-files', () => {
  it('should do something', () => {
    expect(lib).to.be.a('function');
  });
});
