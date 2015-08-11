var Gists = require('..');
var gists = new Gists(require('./fakeuser'));

/**
 * Download a gist
 */

gists.download({id: '5854601'}, function(err, res) {
  console.log(res)
});
