'use strict';

require('mocha');
const assert = require('assert');
const auth = require('./support/auth');
const Gists = require('..');
let gists;

describe('stars', function() {
  this.timeout(10000);
  this.slow(10000);

  beforeEach(() => (gists = new Gists(auth)));

  it('should star and unstar a gist using id on args', function() {
    return gists.star('3b7a6e680ea8aa0395d92d18304e575e')
      .then(() => gists.isStarred('3b7a6e680ea8aa0395d92d18304e575e'))
      .then(res => assert(res))
      .then(() => gists.unstar('3b7a6e680ea8aa0395d92d18304e575e'))
      .then(() => gists.isStarred('3b7a6e680ea8aa0395d92d18304e575e'))
      .then(res => assert(!res));
  });
});
