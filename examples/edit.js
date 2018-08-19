const fs = require('fs');
const Gists = require('..');
const gists = new Gists(require('../test/support/auth'));

/**
 * Edit a gist
 */

gists.edit('bd139161a425896f35f8', {
  files: { 'readme.md': { content: fs.readFileSync(__dirname + '../README.md', 'utf8') } }
});
