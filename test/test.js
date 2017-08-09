/*!
 * gists <https://github.com/jonschlinkert/gists>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var auth = require('./support/auth');
var Gists = require('..');
var gists;

describe('gists', function() {
  beforeEach(function() {
    gists = new Gists(auth);
  });

  it('should return a list of gists for the authenticated user', function(cb) {
    this.timeout(10000);

    gists.list(function(err, res) {
      if (err) return cb(err);
      assert(Array.isArray(res));
      assert(res[0]);
      assert.equal(typeof res[0], 'object');
      assert.equal(typeof res[0].url, 'string');
      cb();
    });
  });

  it('should return a list of gists for the given user', function(cb) {
    this.timeout(10000);

    gists.list({user: 'doowb'}, function(err, res) {
      if (err) return cb(err);
      assert(Array.isArray(res));
      assert(res[0]);
      assert.equal(typeof res[0], 'object');
      assert.equal(typeof res[0].url, 'string');
      cb();
    });
  });
});
