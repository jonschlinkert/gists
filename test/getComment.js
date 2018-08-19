'use strict';

require('mocha');
const assert = require('assert');
const auth = require('./support/auth');
const Gists = require('..');
let gists;

describe('.getComment', function() {
  this.timeout(10000);
  this.slow(10000);

  beforeEach(() => (gists = new Gists(auth)));

  it('should get a comment for a gist using id on options', function() {
    return gists.getComment('3b7a6e680ea8aa0395d92d18304e575e', '2347999')
      .then(res => assert.equal(res.body.body, 'this is a comment'));
  });
});
