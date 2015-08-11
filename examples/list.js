var Gists = require('..');
var gists = new Gists(require('./fakeuser'));

/**
 * List gists for a user.
 */

gists.list({username: 'jonschlinkert'}, function(err, res) {
  if (err) return console.error(err);
  console.log(res);
});
