# gists [![NPM version](https://img.shields.io/npm/v/gists.svg?style=flat)](https://www.npmjs.com/package/gists) [![NPM monthly downloads](https://img.shields.io/npm/dm/gists.svg?style=flat)](https://npmjs.org/package/gists) [![NPM total downloads](https://img.shields.io/npm/dt/gists.svg?style=flat)](https://npmjs.org/package/gists) 

> Methods for working with the GitHub Gist API. Node.js/JavaScript

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save gists
```

**Full support for:**

* [Gist API](https://developer.github.com/v3/gists/)
* [Gist Comments API](https://developer.github.com/v3/gists/comments/)

_(If you find something missing or encounter a bug, please [create an issue](https://github.com/jonschlinkert/gists/issues/new). Thanks!)_

## Heads up!

**Breaking changes in v2.0!!!**

Please read the [CHANGELOG](CHANGELOG.md) for more details.

## Usage

Add `gists` to your node.js/JavaScript project with the following code:

```js
const Gists = require('gists');
const gists = new Gists({
  username: 'your_username', 
  password: 'your_password'
});

// EXAMPLE: Download the Markdown Cheatsheet gist.
gists.get('5854601')
  .then(res => console.log(res))
  .catch(console.error)
```

## API

See the [GitHub Gist API documentation](https://developer.github.com/v3/gists/) for additional details and input options for each method.

### [Gists](index.js#L24)

The main export is the `Gists` class. Start by creating an instance of `Gists`.

**Params**

* `options` **{Object}**

**Example**

```js
// see github-base for all available options and other ways to authenticate
const Gists = require('gists');
const gists = new Gists({ username: 'your_username', password: '*******' });

// all methods, when invoked, return a promise with this sigature
gists.get(...args)
  .then(res => console.log(res.body))
  .catch(console.error);
```

### [.create](index.js#L38)

Create a new gist ([docs](https://developer.github.com/v3/gists/#create-a-gist)).

**Params**

* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// POST /gists
gists.create(options);
```

### [.get](index.js#L55)

Get a gist ([docs](https://developer.github.com/v3/gists/#get-a-single-gist)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to get.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/:gist_id
gists.get(gist_id[, options]);
```

### [.list](index.js#L72)

List all gists for the given `username` ([docs](https://developer.github.com/v3/gists/#list-a-users-gists)).

**Params**

* `username` **{String}**
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /users/:username/gists
gists.list(username[, options]);
```

### [.all](index.js#L89)

List the authenticated user's gists, or if called anonymously get all public gists. ([docs](https://developer.github.com/v3/gists/#list-a-users-gists)).

**Params**

* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/
gists.all(options);
```

### [.public](index.js#L106)

List all public gists sorted by most recently updated to least recently updated ([docs](https://developer.github.com/v3/gists/#list-all-public-gists)).

**Params**

* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/public
gists.public(options);
```

### [.starred](index.js#L122)

List the authenticated user's starred gists ([docs](https://developer.github.com/v3/gists/#list-starred-gists)).

**Params**

* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/starred
gists.starred(options);
```

### [.revision](index.js#L140)

Get a specific revision of a gist ([docs](https://developer.github.com/v3/gists/#get-a-specific-revision-of-a-gist)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to get.
* `sha` **{String}**: (required) The `sha` of the gist revision to get.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/:gist_id/:sha
gists.revision(gist_id, sha[, options]);
```

### [.commits](index.js#L157)

List commits for a gist ([docs](https://developer.github.com/v3/gists/#list-gist-commits)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to get commits for.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/:gist_id/commits
gists.commit(gist_id[, options]);
```

### [.forks](index.js#L174)

List all forks for a gist ([docs](https://developer.github.com/v3/gists/#list-gist-forks)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to list forks for.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/:gist_id/forks
gists.forks(gist_id[, options]);
```

### [.fork](index.js#L191)

Fork a gist ([docs](https://developer.github.com/v3/gists/#fork-a-gist)).

**Params**

* `gist_id` **{String}**: The id of the gist to fork.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// POST /gists/:gist_id/forks
gists.fork(gist_id[, options]);
```

### [.edit](index.js#L208)

Edit a gist ([docs](https://developer.github.com/v3/gists/#edit-a-gist)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to edit.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// PATCH /gists/:gist_id
gists.edit(gist_id[, options]);
```

### [.delete](index.js#L225)

Delete a gist ([docs](https://developer.github.com/v3/gists/#delete-a-gist)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to delete.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// DELETE /gists/:gist_id
gists.delete(gist_id[, options]);
```

### [.star](index.js#L242)

Star a gist ([docs](https://developer.github.com/v3/gists/#star-a-gist)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to star.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// PUT /gists/:gist_id/star
gists.star(gist_id[, options]);
```

### [.unstar](index.js#L259)

Unstar a gist ([docs](https://developer.github.com/v3/gists/#unstar-a-gist)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to unstar.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// DELETE /gists/:gist_id/star
gists.unstar(gist_id[, options]);
```

### [.isStarred](index.js#L277)

Check if a gist is starred ([docs](https://developer.github.com/v3/gists/#check-if-a-gist-is-starred)).

**Params**

* `gist_id` **{String}**: (required) The id of the gist to check.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).
* `returns` **{Boolean}**: Returns `true` if a gist is starred.

**Example**

```js
// GET /gists/:gist_id/star
gists.isStarred(gist_id[, options])
```

### [.comment](index.js#L301)

Create a comment on a gist ([docs](https://developer.github.com/v3/gists/comments/#create-a-comment)).

**Params**

* `gist_id` **{String}**: (required)
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// POST /gists/:gist_id/comments
gists.comment(gist_id, { body: 'Just commenting for the sake of commenting' });
```

### [.getComment](index.js#L319)

Get a single comment from a gist ([docs](https://developer.github.com/v3/gists/comments/#get-a-single-comment)).

**Params**

* `gist_id` **{String}**: (required)
* `comment_id` **{String}**: (required) The id of the comment to get.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/:gist_id/comments/:comment_id
gists.getComment(gist_id, comment_id, options);
```

### [.listComments](index.js#L336)

List comments on a gist ([docs](https://developer.github.com/v3/gists/comments/#list-comments-on-a-gist)).

**Params**

* `gist_id` **{String}**: (required)
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// GET /gists/:gist_id/comments
gists.listComments(options);
```

### [.edit](index.js#L354)

Edit a comment ([docs](https://developer.github.com/v3/gists/comments/#edit-a-comment)).

**Params**

* `gist_id` **{String}**: (required)
* `comment_id` **{String}**: (required) The id of the comment to edit.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// PATCH /gists/:gist_id/comments/:gist_id
gists.editComment(gist_id, comment_id[, options]);
```

### [.delete](index.js#L372)

Delete a comment ([docs](https://developer.github.com/v3/gists/comments/#delete-a-comment)).

**Params**

* `gist_id` **{String}**: (required)
* `comment_id` **{String}**: (required) The id of the comment to edit.
* `options` **{Object}**: Options to pass to [github-base](https://github.com/jonschlinkert/github-base).

**Example**

```js
// DELETE /gists/:gist_id/comments/:comment_id
gists.deleteComment(gist_id, comment_id[, options]);
```

## Release history

### v2.0

* Decrecated `.download` in favor of `.get`. Start using `.get` now, as `.download` will be removed in the next major release.
* Decrecated `.del` in favor of `.delete`. Start using `.delete` now, as `.del` will be removed in the next major release.
* Upgraded [github-base](https://github.com/jonschlinkert/github-base), which is now an ES6 class.

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [github-base](https://www.npmjs.com/package/github-base): Low-level methods for working with the GitHub API in node.js/JavaScript. | [homepage](https://github.com/jonschlinkert/github-base "Low-level methods for working with the GitHub API in node.js/JavaScript.")
* [github-contributors](https://www.npmjs.com/package/github-contributors): Generate a markdown or JSON list of contributors for a project using the GitHub API. | [homepage](https://github.com/jonschlinkert/github-contributors "Generate a markdown or JSON list of contributors for a project using the GitHub API.")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 15 | [jonschlinkert](https://github.com/jonschlinkert) |
| 6 | [tennisonchan](https://github.com/tennisonchan) |
| 4 | [doowb](https://github.com/doowb) |
| 1 | [sheeit](https://github.com/sheeit) |

### Author

**Jon Schlinkert**

* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on August 19, 2018._