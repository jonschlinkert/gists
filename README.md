# gists [![NPM version](https://img.shields.io/npm/v/gists.svg?style=flat)](https://www.npmjs.com/package/gists) [![NPM monthly downloads](https://img.shields.io/npm/dm/gists.svg?style=flat)](https://npmjs.org/package/gists)  [![NPM total downloads](https://img.shields.io/npm/dt/gists.svg?style=flat)](https://npmjs.org/package/gists) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/gists.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/gists)

> Methods for working with the GitHub Gist API. Node.js/JavaScript

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save gists
```

**Full support for:**

* [Gist API](https://developer.github.com/v3/gists/)
* [Gist Comments API](https://developer.github.com/v3/gists/comments/)

_(If you find something missing or encounter a bug, please [create an issue](https://github.com/jonschlinkert/gists/issues/new). Thanks!)_

See the [GitHub Gist API documentation](https://developer.github.com/v3/gists/) for additional details on each method.

## Usage

```js
var Gists = require('gists');
var gists = new Gists({
  username: 'your_username',
  password: 'your_password'
});
```

See [github-base](https://github.com/jonschlinkert/github-base) for all available options and authenication options.

**Example**

Download the [Markdown Cheatsheet](https://gist.github.com/jonschlinkert/5854601) gist.

```js
gists.download({id: '5854601'}, function(err, res) {
  // res is an object with details about the gist, including content, 
  // included files, etc.
  console.log(res)
});
```

See the [GitHub Gist API documentation](https://developer.github.com/v3/gists/) for additional details on each method.

## API

### [Gists](index.js#L12)

Creat an instance of `Gists` with the given default `options`.

**Params**

* `options` **{Object}**

### [.list](index.js#L37)

List a user's gists. By default, the currently authenticated user's gists will be returned. Define `options.user` to get a different user's public gists.

**Params**

* `options` **{Object|Function}**: Options or callback.
* `callback` **{Function}**

**Example**

```js
// GET /users/:user/gists
gists.list({user: 'doowb'}, cb);
```

### [.all](index.js#L63)

List the authenticated user's gists or if called anonymously, this will return all public gists:.

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
// GET /gists/
gists.all(opts, cb);
```

### [.allPublic](index.js#L80)

List all public gists:.

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
// GET /gists/public
gists.allPublic(opts, cb);
```

### [.starred](index.js#L97)

List the authenticated user's starred gists..

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
// GET /gists/starred
gists.starred(opts, cb);
```

### [.download](index.js#L115)

Download a gist..

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to download.
* `callback` **{Function}**

**Example**

```js
// GET /gists/:id
gists.download(opts, cb);
```

### [.revision](index.js#L134)

Get a specific revision of a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to revise.
* `opts.sha` **{String}**: The `sha` of the gist to revise.
* `callback` **{Function}**

**Example**

```js
// GET /gists/:id/:sha
gists.revision(opts, cb);
```

### [.commits](index.js#L152)

List gist commits for a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to get commits for.
* `callback` **{Function}**

**Example**

```js
// GET /gists/:id/commits
gists.commit(opts, cb);
```

### [.forks](index.js#L170)

List all forks for a gist..

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to list forks for.
* `callback` **{Function}**

**Example**

```js
// GET /gists/:id/forks
gists.forks(opts, cb);
```

### [.create](index.js#L187)

Create a gist.

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
// POST /gists
gists.create(opts, cb);
```

### [.fork](index.js#L205)

Fork a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to fork.
* `callback` **{Function}**

**Example**

```js
// POST /gists/:id/forks
gists.fork(opts, cb);
```

### [.edit](index.js#L223)

Edit/update a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to edit.
* `callback` **{Function}**

**Example**

```js
// PATCH /gists/:id
gists.edit(opts, cb);
```

### [.star](index.js#L241)

Star a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to star.
* `callback` **{Function}**

**Example**

```js
// PUT /gists/:id/star
gists.star(opts, cb);
```

### [.unstar](index.js#L259)

Unstar a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to unstar.
* `callback` **{Function}**

**Example**

```js
// DELETE /gists/:id/star
gists.unstar(opts, cb);
```

### [.isStarred](index.js#L277)

Check if a gist is starred.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to check.
* `callback` **{Function}**

**Example**

```js
// GET /gists/:id/star
gists.isStarred(opts, cb);
```

### [.destroy](index.js#L295)

Delete a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to delete.
* `callback` **{Function}**

**Example**

```js
// DELETE /gists/:id
gists.destroy(opts, cb);
```

### [.comment](index.js#L313)

Create a comment.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to comment on
* `callback` **{Function}**

**Example**

```js
// POST /gists/:id/comments
gists.comment(opts, cb);
```

### [.editComment](index.js#L332)

Edit a comment.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist.
* `opts.comment_id` **{String}**: The id of the comment to edit.
* `callback` **{Function}**

**Example**

```js
// PATCH /gists/:gist_id/comments/:id
gists.editComment(opts, cb);
```

### [.destroyComment](index.js#L352)

Delete a comment.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist.
* `opts.comment_id` **{String}**: The id of the comment to edit.
* `callback` **{Function}**

**Example**

```js
// DELETE /gists/:gist_id/comments/:id
var opts = {id: 'a6db0bec360bb87e9418', commend_id: 1};
gists.destroyComment(opts, cb);
```

### [.getComment](index.js#L371)

Get a single comment from a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to get.
* `opts.comment_id` **{String}**: The id of the comment to get.
* `callback` **{Function}**

**Example**

```js
// GET /gists/:id/comments/:comment_id
gists.comment(opts, cb);
```

### [.getComments](index.js#L389)

List comments on a gist

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist
* `callback` **{Function}**

**Example**

```js
// GET /gists/:id/comments
gists.getComments(opts, cb);
```

## About

### Related projects

* [github-base](https://www.npmjs.com/package/github-base): JavaScript wrapper that greatly simplifies working with GitHub's API. | [homepage](https://github.com/jonschlinkert/github-base "JavaScript wrapper that greatly simplifies working with GitHub's API.")
* [github-contributors](https://www.npmjs.com/package/github-contributors): Generate a markdown or JSON list of contributors for a project using the GitHub API. | [homepage](https://github.com/jonschlinkert/github-contributors "Generate a markdown or JSON list of contributors for a project using the GitHub API.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 15 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 6  | [tennisonchan](https://github.com/tennisonchan) |  
| 1  | [doowb](https://github.com/doowb) |  
| 1  | [sheeit](https://github.com/sheeit) |  

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on January 22, 2018._