'use strict';

var GitHub = require('github-base');

/**
 * Creat an instance of `Gists` with the given default `options`.
 *
 * @param {Object} `options`
 * @api public
 */

function Gists(options) {
  GitHub.call(this, options);
}

GitHub.extend(Gists);


/**
 * Gist prototype methods
 */
GitHub.delegate({
  constructor: Gists,

  /**
   * List a user's gists.
   *
   * ```js
   * // equivalent of `GET /users/:username/gists`
   * gists.list({username: 'doowb'}, cb);
   * ```
   * @name .list
   * @param {Object} `opts`
   * @param {String} `opts.username`
   * @param {Function} `callback`
   * @api public
   */

  list: function (opts, cb) {
    this.get('/users/:username/gists', opts, cb);
    return this;
  },

  /**
   * List the authenticated user's gists or if called anonymously,
   * this will return all public gists:.
   *
   * ```js
   * // equivalent of `GET /gists/`
   * gists.all(opts, cb);
   * ```
   * @name .all
   * @param {Object} `opts`
   * @param {Function} `callback`
   * @api public
   */

  all: function (opts, cb) {
    this.get('/gists/', opts, cb);
    return this;
  },

  /**
   * List all public gists:.
   *
   * ```js
   * // equivalent of `GET /gists/public`
   * gists.allPublic(opts, cb);
   * ```
   * @name .allPublic
   * @param {Object} `opts`
   * @param {Function} `callback`
   * @api public
   */

  allPublic: function (opts, cb) {
    this.get('/gists/public', opts, cb);
    return this;
  },

  /**
   * List the authenticated user's starred gists..
   *
   * ```js
   * // equivalent of `GET /gists/starred`
   * gists.starred(opts, cb);
   * ```
   * @name .starred
   * @param {Object} `opts`
   * @param {Function} `callback`
   * @api public
   */

  starred: function (opts, cb) {
    this.get('/gists/starred', opts, cb);
    return this;
  },

  /**
   * Download a gist..
   *
   * ```js
   * // equivalent of `GET /gists/:id`
   * gists.download(opts, cb);
   * ```
   * @name .download
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to download.
   * @param {Function} `callback`
   * @api public
   */

  download: function (opts, cb) {
    this.get('/gists/:id', opts, cb);
    return this;
  },

  /**
   * Get a specific revision of a gist.
   *
   * ```js
   * // equivalent of `GET /gists/:id/:sha`
   * gists.revision(opts, cb);
   * ```
   * @name .revision
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to revise.
   * @param {String} `opts.sha` The `sha` of the gist to revise.
   * @param {Function} `callback`
   * @api public
   */

  revision: function (opts, cb) {
    this.get('/gists/:id/:sha', opts, cb);
    return this;
  },

  /**
   * List gist commits for a gist.
   *
   * ```js
   * // equivalent of `GET /gists/:id/commits`
   * gists.commit(opts, cb);
   * ```
   * @name .commits
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to get commits for.
   * @param {Function} `callback`
   * @api public
   */

  commits: function (opts, cb) {
    this.get('/gists/:id/commits', opts, cb);
    return this;
  },

  /**
   * List all forks for a gist..
   *
   * ```js
   * // equivalent of `GET /gists/:id/forks`
   * gists.forks(opts, cb);
   * ```
   * @name .forks
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to list forks for.
   * @param {Function} `callback`
   * @api public
   */

  forks: function (opts, cb) {
    this.get('/gists/:id/forks', opts, cb);
    return this;
  },

  /**
   * Create a gist.
   *
   * ```js
   * // equivalent of `POST /gists`
   * gists.create(opts, cb);
   * ```
   * @name .create
   * @param {Object} `opts`
   * @param {Function} `callback`
   * @api public
   */

  create: function (opts, cb) {
    this.post('/gists/', opts, cb);
    return this;
  },

  /**
   * Fork a gist.
   *
   * ```js
   * // equivalent of `POST /gists/:id/forks`
   * gists.fork(opts, cb);
   * ```
   * @name .fork
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to fork.
   * @param {Function} `callback`
   * @api public
   */

  fork: function (opts, cb) {
    this.post('/gists/:id/forks', opts, cb);
    return this;
  },

  /**
   * Edit/update a gist.
   *
   * ```js
   * // equivalent of `PATCH /gists/:id`
   * gists.edit(opts, cb);
   * ```
   * @name .edit
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to edit.
   * @param {Function} `callback`
   * @api public
   */

  edit: function (opts, cb) {
    this.patch('/gists/:id', opts, cb);
    return this;
  },

  /**
   * Star a gist.
   *
   * ```js
   * // equivalent of `PUT /gists/:id/star`
   * gists.star(opts, cb);
   * ```
   * @name .star
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to star.
   * @param {Function} `callback`
   * @api public
   */

  star: function (opts, cb) {
    this.put('/gists/:id/star', opts, cb);
    return this;
  },

  /**
   * Untar a gist.
   *
   * ```js
   * // equivalent of `DELETE /gists/:id/star`
   * gists.unstar(opts, cb);
   * ```
   * @name .unstar
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to unstar.
   * @param {Function} `callback`
   * @api public
   */

  unstar: function (opts, cb) {
    this.del('/gists/:id/star', opts, cb);
    return this;
  },

  /**
   * Check if a gist is starred.
   *
   * ```js
   * // equivalent of `GET /gists/:id/star`
   * gists.isStarred(opts, cb);
   * ```
   * @name .isStarred
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to check.
   * @param {Function} `callback`
   * @api public
   */

  isStarred: function (opts, cb) {
    this.get('/gists/:id/star', opts, cb);
    return this;
  },

  /**
   * Delete a gist.
   *
   * ```js
   * // equivalent of `DELETE /gists/:id`
   * gists.destroy(opts, cb);
   * ```
   * @name .destroy
   * @param {Object} `opts`
   * @param {String} `opts.id` The id of the gist to delete.
   * @param {Function} `callback`
   * @api public
   */

  destroy: function (opts, cb) {
    this.del('/gists/:id', opts, cb);
    return this;
  }
});

/**
 * Expose `Gists`
 */

module.exports = Gists;
