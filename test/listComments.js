'use strict';

require('mocha');
const assert = require('assert');
const auth = require('./support/auth');
const Gists = require('..');
let gists;

describe('.listComments', function() {
  this.timeout(10000);
  this.slow(10000);

  beforeEach(() => (gists = new Gists(auth)));

  it('should get all comments for a gist using id on options', function() {
    return gists.listComments('3b7a6e680ea8aa0395d92d18304e575e')
      .then(res => {
        assert(Array.isArray(res.body));
        assert.equal(res.body[0].body, 'this is a comment');
      });
  });
});
