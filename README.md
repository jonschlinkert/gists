# gists [![NPM version](https://badge.fury.io/js/gists.svg)](http://badge.fury.io/js/gists)

> Node.js utils for working with the GitHub Gist API.

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

All methods use the following format:

```js
gists.METHOD({id: GIST_ID}, function(err, res) {
  // `err` is an error object or null
  // `res` is the github response
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

## API

### [Gists](index.js#L13)

Creat an instance of `Gists` with the
given default `options`.

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

### [.list](index.js#L38)

List a user's gists (`GET /users/:username/gists`)

**Params**

* `opts` **{Object}**
* `opts.username` **{String}**
* `callback` **{Function}**

**Example**

```js
gists.list({username: 'doowb'}, cb);
```

### [.all](index.js#L55)

List the authenticated user's gists or if called anonymously, this will return all public gists: (`GET /gists/`)

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
gists.all(opts, cb);
```

### [.allPublic](index.js#L71)

List all public gists: (`GET /gists/public`)

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
gists.allPublic(opts, cb);
```

### [.starred](index.js#L87)

List the authenticated user's starred gists. (`GET /gists/starred`)

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
gists.starred(opts, cb);
```

### [.download](index.js#L104)

Download a gist. (`GET /gists/:id`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to download.
* `callback` **{Function}**

**Example**

```js
gists.download(opts, cb);
```

### [.revision](index.js#L122)

Get a specific revision of a gist (`GET /gists/:id/:sha`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to revise.
* `opts.sha` **{String}**: The `sha` of the gist to revise.
* `callback` **{Function}**

**Example**

```js
gists.revision(opts, cb);
```

### [.commits](index.js#L139)

List gist commits for a gist (`GET /gists/:id/commits`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to get commits for.
* `callback` **{Function}**

**Example**

```js
gists.commit(opts, cb);
```

### [.forks](index.js#L156)

List all forks for a gist. (`GET /gists/:id/forks`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to list forks for.
* `callback` **{Function}**

**Example**

```js
gists.forks(opts, cb);
```

### [.create](index.js#L172)

Create a gist (`POST /gists`)

**Params**

* `opts` **{Object}**
* `callback` **{Function}**

**Example**

```js
gists.create(opts, cb);
```

### [.fork](index.js#L189)

Fork a gist (`POST /gists/:id/forks`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to fork.
* `callback` **{Function}**

**Example**

```js
gists.fork(opts, cb);
```

### [.edit](index.js#L206)

Edit/update a gist (`PATCH /gists/:id`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to edit.
* `callback` **{Function}**

**Example**

```js
gists.edit(opts, cb);
```

### [.star](index.js#L223)

Star a gist (`PUT /gists/:id/star`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to star.
* `callback` **{Function}**

**Example**

```js
gists.star(opts, cb);
```

### [.unstar](index.js#L240)

Untar a gist (`DELETE /gists/:id/star`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to unstar.
* `callback` **{Function}**

**Example**

```js
gists.unstar(opts, cb);
```

### [.isStarred](index.js#L257)

Check if a gist is starred (`GET /gists/:id/star`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to check.
* `callback` **{Function}**

**Example**

```js
gists.isStarred(opts, cb);
```

### [.destroy](index.js#L274)

Delete a gist (`DELETE /gists/:id`)

**Params**

* `opts` **{Object}**
* `opts.id` **{String}**: The id of the gist to delete.
* `callback` **{Function}**

**Example**

```js
gists.destroy(opts, cb);
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