'use strict';

const fs = require('fs');
const path = require('path');
const authPath = path.join(__dirname, '../../tmp/auth.json');
const opts = { alias: { password: 'p', username: 'u' } };
const argv = require('minimist')(process.argv.slice(2), opts);
const Store = require('data-store');
const store = new Store('github-base-tests');
const auth = fs.existsSync(authPath) ? require(authPath) : store.get('auth');

if (!auth) {
  auth = {
    username: argv.username || argv._[0] || process.env.GITHUB_USERNAME,
    password: argv.password || argv._[1] || process.env.GITHUB_PASSWORD
  };
}

if (isString(auth.username) && isString(auth.password)) {
  store.set('auth', auth);
} else {
  /* eslint-disable no-console */
  console.error('please specify authentication details');
  console.error('--username, -u (or first argument)');
  console.error('--password, -p (or second argument)');
  process.exit(1);
}

function isString(val) {
  return val && typeof val === 'string';
}

module.exports = auth;
