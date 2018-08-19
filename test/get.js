'use strict';

require('mocha');
const assert = require('assert');
const auth = require('./support/auth');
const Gists = require('..');
let gists;

describe('.get', function() {
  this.timeout(10000);
  this.slow(10000);

  beforeEach(() => (gists = new Gists(auth)));

  it('should get a gist', function() {
    return gists.get('3b7a6e680ea8aa0395d92d18304e575e')
      .then(res => assert(res.body.files.hasOwnProperty('fixture.txt')));
  });
});
