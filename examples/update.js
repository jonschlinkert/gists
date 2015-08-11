var fs = require('fs');
var Gists = require('..');
var gists = new Gists(require('./fakeuser'));

/**
 * Update a gist
 */

var opts = {
  id: '/gists/bd139161a425896f35f8',
  files: {'readme.md': { content: fs.readFileSync('README.md', 'utf8') }}
};

gists.patch(opts, function(err, res) {
  console.log(err, res);
});

