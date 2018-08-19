const Gists = require('..');
const gists = new Gists(require('../test/support/auth'));

/**
 * Get a gist
 */

gists.get('5854601')
  .then(res => console.log(res))
  .catch(console.error);
