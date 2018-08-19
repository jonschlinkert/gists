'use strict';

require('mocha');
const assert = require('assert');
const auth = require('./support/auth');
const Gists = require('..');
let gists;

describe('.list', function() {
  this.timeout(10000);
  this.slow(10000);

  beforeEach(() => (gists = new Gists(auth)));

  it('should return a list of gists for the user passed on args', function() {
    return gists.list('doowb')
      .then(res => {
        assert(Array.isArray(res.body));
        assert(res.body[0]);
        assert.equal(typeof res.body[0], 'object');
        assert.equal(typeof res.body[0].url, 'string');
      });
  });
});
