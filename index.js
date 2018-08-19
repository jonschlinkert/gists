'use strict';

const GitHub = require('github-base');

/**
 * The main export is the `Gists` class. Start by creating an instance of `Gists`.
 *
 * ```js
 * // see github-base for all available options and other ways to authenticate
 * const Gists = require('gists');
 * const gists = new Gists({ username: 'your_username', password: '*******' });
 *
 * // all methods, when invoked, return a promise with this sigature
 * gists.get(...args)
 *   .then(res => console.log(res.body))
 *   .catch(console.error);
 * ```
 * @class
 * @name Gists
 * @param {Object} `options`
 * @api public
 */

class Gists extends GitHub {

  /**
   * Create a new gist ([docs][create_gist]).
   *
   * ```js
   * // POST /gists
   * gists.create(options);
   * ```
   * @name .create
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  create(options) {
    return this.post('/gists', options);
  }

  /**
   * Get a gist ([docs][get_gist]).
   *
   * ```js
   * // GET /gists/:gist_id
   * gists.get(gist_id[, options]);
   * ```
   * @name .get
   * @param {String} `gist_id` (required) The id of the gist to get.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  get(gist_id, options) {
    return super.get(`/gists/${gist_id}`, options);
  }

  /**
   * List all gists for the given `username` ([docs][list_gists]).
   *
   * ```js
   * // GET /users/:username/gists
   * gists.list(username[, options]);
   * ```
   * @name .list
   * @param {String} `username`
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  list(username, options) {
    return super.get(`/users/${username}/gists`, options);
  }

  /**
   * List the authenticated user's gists, or if called anonymously get all
   * public gists. ([docs][list_gists]).
   *
   * ```js
   * // GET /gists/
   * gists.all(options);
   * ```
   * @name .all
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  all(options) {
    return this.paged('/gists', options);
  }

  /**
   * List all public gists sorted by most recently updated to least
   * recently updated ([docs][list_public]).
   *
   * ```js
   * // GET /gists/public
   * gists.public(options);
   * ```
   * @name .public
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  public(options) {
    return this.paged('/gists/public', options);
  }

  /**
   * List the authenticated user's starred gists ([docs][list_starred]).
   *
   * ```js
   * // GET /gists/starred
   * gists.starred(options);
   * ```
   * @name .starred
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  starred(options) {
    return super.get('/gists/starred', options);
  }

  /**
   * Get a specific revision of a gist ([docs][get_revision]).
   *
   * ```js
   * // GET /gists/:gist_id/:sha
   * gists.revision(gist_id, sha[, options]);
   * ```
   * @name .revision
   * @param {String} `gist_id` (required) The id of the gist to get.
   * @param {String} `sha` (required) The `sha` of the gist revision to get.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  revision(gist_id, sha, options) {
    return super.get(`/gists/${gist_id}/${sha}`, options);
  }

  /**
   * List commits for a gist ([docs][list_gist_commits]).
   *
   * ```js
   * // GET /gists/:gist_id/commits
   * gists.commit(gist_id[, options]);
   * ```
   * @name .commits
   * @param {String} `gist_id` (required) The id of the gist to get commits for.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  commits(gist_id, options) {
    return super.get(`/gists/${gist_id}/commits`, options);
  }

  /**
   * List all forks for a gist ([docs][list_gist_forks]).
   *
   * ```js
   * // GET /gists/:gist_id/forks
   * gists.forks(gist_id[, options]);
   * ```
   * @name .forks
   * @param {String} `gist_id` (required) The id of the gist to list forks for.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  forks(gist_id, options) {
    return super.get(`/gists/${gist_id}/forks`, options);
  }

  /**
   * Fork a gist ([docs][fork_gist]).
   *
   * ```js
   * // POST /gists/:gist_id/forks
   * gists.fork(gist_id[, options]);
   * ```
   * @name .fork
   * @param {String} `gist_id` The id of the gist to fork.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  fork(gist_id, options) {
    return super.post(`/gists/${gist_id}/forks`, options);
  }

  /**
   * Edit a gist ([docs][edit_gist]).
   *
   * ```js
   * // PATCH /gists/:gist_id
   * gists.edit(gist_id[, options]);
   * ```
   * @name .edit
   * @param {String} `gist_id` (required) The id of the gist to edit.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  edit(gist_id, options) {
    return super.patch(`/gists/${gist_id}`, options);
  }

  /**
   * Delete a gist ([docs][delete_gist]).
   *
   * ```js
   * // DELETE /gists/:gist_id
   * gists.delete(gist_id[, options]);
   * ```
   * @name .delete
   * @param {String} `gist_id` (required) The id of the gist to delete.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  delete(gist_id, options) {
    return super.delete(`/gists/${gist_id}`, options);
  }

  /**
   * Star a gist ([docs][star_gist]).
   *
   * ```js
   * // PUT /gists/:gist_id/star
   * gists.star(gist_id[, options]);
   * ```
   * @name .star
   * @param {String} `gist_id` (required) The id of the gist to star.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  star(gist_id, options) {
    return this.put(`/gists/${gist_id}/star`, options);
  }

  /**
   * Unstar a gist ([docs][unstar_gist]).
   *
   * ```js
   * // DELETE /gists/:gist_id/star
   * gists.unstar(gist_id[, options]);
   * ```
   * @name .unstar
   * @param {String} `gist_id` (required) The id of the gist to unstar.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  unstar(gist_id, options) {
    return super.delete(`/gists/${gist_id}/star`, options);
  }

  /**
   * Check if a gist is starred ([docs][is_starred]).
   *
   * ```js
   * // GET /gists/:gist_id/star
   * gists.isStarred(gist_id[, options])
   * ```
   * @name .isStarred
   * @param {String} `gist_id` (required) The id of the gist to check.
   * @param {Object} `options` Options to pass to [github-base][].
   * @return {Boolean} Returns `true` if a gist is starred.
   * @api public
   */

  isStarred(gist_id, options) {
    return super.get(`/gists/${gist_id}/star`, options)
      .then(res => true)
      .catch(err => {
        if (err.res.statusCode !== 404) {
          return Promise.resolve(err);
        }
        return false;
      });
  }

  /**
   * Create a comment on a gist ([docs][create_comment]).
   *
   * ```js
   * // POST /gists/:gist_id/comments
   * gists.comment(gist_id, { body: 'Just commenting for the sake of commenting' });
   * ```
   * @name .comment
   * @param {String} `gist_id` (required)
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  createComment(gist_id, options) {
    return super.post(`/gists/${gist_id}/comments`, options);
  }

  /**
   * Get a single comment from a gist ([docs][get_comment]).
   *
   * ```js
   * // GET /gists/:gist_id/comments/:comment_id
   * gists.getComment(gist_id, comment_id, options);
   * ```
   * @name .getComment
   * @param {String} `gist_id` (required)
   * @param {String} `comment_id` (required) The id of the comment to get.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  getComment(gist_id, comment_id, options) {
    return super.get(`/gists/${gist_id}/comments/${comment_id}`, options);
  }

  /**
   * List comments on a gist ([docs][list_comments]).
   *
   * ```js
   * // GET /gists/:gist_id/comments
   * gists.listComments(options);
   * ```
   * @name .listComments
   * @param {String} `gist_id` (required)
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  listComments(gist_id, options) {
    return super.get(`/gists/${gist_id}/comments`, options);
  }

  /**
   * Edit a comment ([docs][edit_comment]).
   *
   * ```js
   * // PATCH /gists/:gist_id/comments/:gist_id
   * gists.editComment(gist_id, comment_id[, options]);
   * ```
   * @name .edit
   * @param {String} `gist_id` (required)
   * @param {String} `comment_id` (required) The id of the comment to edit.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  editComment(gist_id, comment_id, options) {
    return this.patch(`/gists/${gist_id}/comments/${comment_id}`, options);
  }

  /**
   * Delete a comment ([docs][delete_comment]).
   *
   * ```js
   * // DELETE /gists/:gist_id/comments/:comment_id
   * gists.deleteComment(gist_id, comment_id[, options]);
   * ```
   * @name .delete
   * @param {String} `gist_id` (required)
   * @param {String} `comment_id` (required) The id of the comment to edit.
   * @param {Object} `options` Options to pass to [github-base][].
   * @api public
   */

  deleteComment(gist_id, comment_id, options) {
    return this.delete(`/gists/${gist_id}/comments/${comment_id}`, options);
  }
}

/**
 * Expose `Gists` class
 */

module.exports = Gists;
