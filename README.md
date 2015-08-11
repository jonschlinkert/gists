# gists [![NPM version](https://badge.fury.io/js/gists.svg)](http://badge.fury.io/js/gists)

> Methods for working with the GitHub Gist API. Node.js/JavaScript

See the [GitHub Gist API documentation](https://developer.github.com/v3/gists/) for additional details on each method.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i gists --save
```

## Usage

```js
var Gists = require('gists');
var gists = new Gists({
  username: 'foobarbaz123',
  password: '**********'
});
```

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

**Example**

```js
var Gists = require('gists');
var gists = new Gists({
  username: 'foobarbaz123',
  password: '**********'
});
```

### [.list](index.js#L39)

List a user's gists.

**Params**

* `opts` **{Object}**
* `opts.username` **{String}**
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /users/:username/gists`
gists.list({username: 'doowb'}, cb);
```

### [.all](index.js#L58)

List the authenticated user's gists or if called anonymously, this will return all public gists:.

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /gists/`
gists.all(opts, cb);
```

### [.allPublic](index.js#L76)

List all public gists:.

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /gists/public`
gists.allPublic(opts, cb);
```

### [.starred](index.js#L94)

List the authenticated user's starred gists..

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /gists/starred`
gists.starred(opts, cb);
```

### [.download](index.js#L113)

Download a gist..

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to download.
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /gists/:id`
gists.download(opts, cb);
```

### [.revision](index.js#L133)

Get a specific revision of a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to revise.
* `opts.sha` **{String}**: The `sha` of the gist to revise.
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /gists/:id/:sha`
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
// equivalent of `GET /gists/:id/commits`
gists.commit(opts, cb);
```

### [.forks](index.js#L171)

List all forks for a gist..

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to list forks for.
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /gists/:id/forks`
gists.forks(opts, cb);
```

### [.create](index.js#L189)

Create a gist.

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
// equivalent of `POST /gists`
gists.create(opts, cb);
```

### [.fork](index.js#L208)

Fork a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to fork.
* `callback` **{Function}**

**Example**

```js
// equivalent of `POST /gists/:id/forks`
gists.fork(opts, cb);
```

### [.edit](index.js#L227)

Edit/update a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to edit.
* `callback` **{Function}**

**Example**

```js
// equivalent of `PATCH /gists/:id`
gists.edit(opts, cb);
```

### [.star](index.js#L246)

Star a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to star.
* `callback` **{Function}**

**Example**

```js
// equivalent of `PUT /gists/:id/star`
gists.star(opts, cb);
```

### [.unstar](index.js#L265)

Untar a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to unstar.
* `callback` **{Function}**

**Example**

```js
// equivalent of `DELETE /gists/:id/star`
gists.unstar(opts, cb);
```

### [.isStarred](index.js#L284)

Check if a gist is starred.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to check.
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /gists/:id/star`
gists.isStarred(opts, cb);
```

### [.destroy](index.js#L303)

Delete a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to delete.
* `callback` **{Function}**

**Example**

```js
// equivalent of `DELETE /gists/:id`
gists.destroy(opts, cb);
```

### [.comment](index.js#L322)

Create a comment.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to comment on
* `callback` **{Function}**

**Example**

```js
// equivalent of `POST /gists/:id/comments`
gists.comment(opts, cb);
```

### [.editComment](index.js#L342)

Edit a comment.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist.
* `opts.comment_id` **{String}**: The id of the comment to edit.
* `callback` **{Function}**

**Example**

```js
// equivalent of `PATCH /gists/:gist_id/comments/:id`
gists.editComment(opts, cb);
```

### [.destroyComment](index.js#L363)

Delete a comment.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist.
* `opts.comment_id` **{String}**: The id of the comment to edit.
* `callback` **{Function}**

**Example**

```js
// equivalent of `DELETE /gists/:gist_id/comments/:id`
var opts = {id: 'a6db0bec360bb87e9418', commend_id: 1};
gists.destroyComment(opts, cb);
```

### [.getComment](index.js#L383)

Get a single comment from a gist.

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to get.
* `opts.comment_id` **{String}**: The id of the comment to get.
* `callback` **{Function}**

**Example**

```js
// equivalent of `/gists/:id/comments/:comment_id`
gists.comment(opts, cb);
```

### [.comments](index.js#L402)

List comments on a gist

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist
* `callback` **{Function}**

**Example**

```js
// equivalent of `GET /gists/:id/comments`
gists.getComments(opts, cb);
```

## Related projects

* [github-base](https://github.com/jonschlinkert/github-base): Base methods for creating node.js apps that work with the GitHub API.
* [github-contributors](https://github.com/jonschlinkert/github-contributors): Generate a markdown or JSON list of contributors for a project using the GitHub API.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/gists/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 11, 2015._