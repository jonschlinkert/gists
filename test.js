/*!
 * gists <https://github.com/jonschlinkert/gists>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var should = require('should');
var fake = require('./examples/fakeuser');
var Gists = require('./');
var gists;


describe('gists', function () {
  beforeEach(function() {
    gists = new Gists({
      username: fake.username,
      password: fake.password
    });
  });

  it('should return a list of gists for the authenticated user', function (done) {
    this.slow(500);
    gists.list(function (err, res) {
      if (err) return done(err);
      assert.equal(Array.isArray(res), true);
      assert.equal(typeof res[0], 'object');
      assert.equal(typeof res[0].url, 'string');
      done();
    });
  });

  it.skip('should return a list of gists for the given user', function (done) {
    this.slow(500);
    gists.list({username: 'doowb'}, function (err, res) {
      if (err) return done(err);
      assert.equal(Array.isArray(res), true);
      assert.equal(typeof res[0], 'object');
      assert.equal(typeof res[0].url, 'string');
      done();
    });
  });
});
