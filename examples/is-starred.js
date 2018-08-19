const Gists = require('..');
const gists = new Gists(require('../test/support/auth'));

/**
 * Check if a gist is starred
 */

gists.star('3b7a6e680ea8aa0395d92d18304e575e')
  .then(() => gists.isStarred('3b7a6e680ea8aa0395d92d18304e575e')).then(console.log)
  .then(() => gists.unstar('3b7a6e680ea8aa0395d92d18304e575e'))
  .then(() => gists.isStarred('3b7a6e680ea8aa0395d92d18304e575e')).then(console.log)
  .catch(err => console.error(err));
