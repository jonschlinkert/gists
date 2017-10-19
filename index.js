'use strict';

var GitHub = require('github-base');

/**
 * Creat an instance of `Gists` with the given default `options`.
 *
 * @param {Object} `options`
 * @api public
 */

function Gists(options) {
  this.options = Object.assign({}, options);
  GitHub.call(this, this.options);
}

/**
 * Inherit github-base
 */

GitHub.extend(Gists);

/**
 * List a user's gists. By default, the currently authenticated
 * user's gists will be returned. Define `options.user` to get a
 * different user's public gists.
 *
 * ```js
 * // GET /users/:user/gists
 * gists.list({user: 'doowb'}, cb);
 * ```
 * @param {Object|Function} `options` Options or callback.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.list = function(options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = null;
  }

  var opts = Object.assign({}, this.options, options);
  opts.user = opts.user || opts.username;

  this.get('/users/:user/gists', options, cb);
  return this;
};

/**
 * List the authenticated user's gists or if called anonymously,
 * this will return all public gists:.
 *
 * ```js
 * // GET /gists/
 * gists.all(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.all = function(opts, cb) {
  this.paged('/gists', opts, cb);
  return this;
};

/**
 * List all public gists:.
 *
 * ```js
 * // GET /gists/public
 * gists.allPublic(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.allPublic = function(opts, cb) {
  this.get('/gists/public', opts, cb);
  return this;
};

/**
 * List the authenticated user's starred gists..
 *
 * ```js
 * // GET /gists/starred
 * gists.starred(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.starred = function(opts, cb) {
  this.get('/gists/starred', opts, cb);
  return this;
};

/**
 * Download a gist..
 *
 * ```js
 * // GET /gists/:id
 * gists.download(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to download.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.download = function(opts, cb) {
  this.get('/gists/:id', opts, cb);
  return this;
};

/**
 * Get a specific revision of a gist.
 *
 * ```js
 * // GET /gists/:id/:sha
 * gists.revision(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to revise.
 * @param {String} `opts.sha` The `sha` of the gist to revise.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.revision = function(opts, cb) {
  this.get('/gists/:id/:sha', opts, cb);
  return this;
};

/**
 * List gist commits for a gist.
 *
 * ```js
 * // GET /gists/:id/commits
 * gists.commit(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to get commits for.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.commits = function(opts, cb) {
  this.get('/gists/:id/commits', opts, cb);
  return this;
};

/**
 * List all forks for a gist..
 *
 * ```js
 * // GET /gists/:id/forks
 * gists.forks(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to list forks for.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.forks = function(opts, cb) {
  this.get('/gists/:id/forks', opts, cb);
  return this;
};

/**
 * Create a gist.
 *
 * ```js
 * // POST /gists
 * gists.create(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.create = function(opts, cb) {
  this.post('/gists', opts, cb);
  return this;
};

/**
 * Fork a gist.
 *
 * ```js
 * // POST /gists/:id/forks
 * gists.fork(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to fork.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.fork = function(opts, cb) {
  this.post('/gists/:id/forks', opts, cb);
  return this;
};

/**
 * Edit/update a gist.
 *
 * ```js
 * // PATCH /gists/:id
 * gists.edit(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to edit.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.edit = function(opts, cb) {
  this.patch('/gists/:id', opts, cb);
  return this;
};

/**
 * Star a gist.
 *
 * ```js
 * // PUT /gists/:id/star
 * gists.star(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to star.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.star = function(opts, cb) {
  this.put('/gists/:id/star', opts, cb);
  return this;
};

/**
 * Unstar a gist.
 *
 * ```js
 * // DELETE /gists/:id/star
 * gists.unstar(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to unstar.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.unstar = function(opts, cb) {
  this.del('/gists/:id/star', opts, cb);
  return this;
};

/**
 * Check if a gist is starred.
 *
 * ```js
 * // GET /gists/:id/star
 * gists.isStarred(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to check.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.isStarred = function(opts, cb) {
  this.get('/gists/:id/star', opts, cb);
  return this;
};

/**
 * Delete a gist.
 *
 * ```js
 * // DELETE /gists/:id
 * gists.destroy(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to delete.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.destroy = function(opts, cb) {
  this.del('/gists/:id', opts, cb);
  return this;
};

/**
 * Create a comment.
 *
 * ```js
 * // POST /gists/:id/comments
 * gists.comment(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to comment on
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.comment = function(opts, cb) {
  this.post('/gists/:id/comments', opts, cb);
  return this;
};

/**
 * Edit a comment.
 *
 * ```js
 * // PATCH /gists/:gist_id/comments/:id
 * gists.editComment(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist.
 * @param {String} `opts.comment_id` The id of the comment to edit.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.editComment = function(opts, cb) {
  this.patch('/gists/:id/comments/:comment_id', opts, cb);
  return this;
};

/**
 * Delete a comment.
 *
 * ```js
 * // DELETE /gists/:gist_id/comments/:id
 * var opts = {id: 'a6db0bec360bb87e9418', commend_id: 1};
 * gists.destroyComment(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist.
 * @param {String} `opts.comment_id` The id of the comment to edit.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.destroyComment = function(opts, cb) {
  this.patch('/gists/:id/comments/:comment_id', opts, cb);
  return this;
};

/**
 * Get a single comment from a gist.
 *
 * ```js
 * // GET /gists/:id/comments/:comment_id
 * gists.comment(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist to get.
 * @param {String} `opts.comment_id` The id of the comment to get.
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.getComment = function(opts, cb) {
  this.get('/gists/:id/comments/:comment_id', opts, cb);
  return this;
};

/**
 * List comments on a gist
 *
 * ```js
 * // GET /gists/:id/comments
 * gists.getComments(opts, cb);
 * ```
 * @param {Object} `opts`
 * @param {String} `opts.id` The id of the gist
 * @param {Function} `callback`
 * @api public
 */

Gists.prototype.getComments = function(opts, cb) {
  this.get('/gists/:id/comments', opts, cb);
  return this;
};

/**
 * Expose `Gists`
 */

module.exports = Gists;
