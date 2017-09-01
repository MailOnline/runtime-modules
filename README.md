# runtime-packages

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Runtime npm package registry.

## Installation

This is a server-side-only package, intended to run in a **Node.JS** environment.

Install using [npm](http://npmjs.org/):

```bash
$ npm install runtime-packages
```

## Usage

### load

Returns a promise resolving to the package if it's available in the registry

```js
import {load} from 'runtime-packages';

const doSomething = async () => {
  try {
    const package = await load({
      packagesPath: '/path/to/keep/packages/in',
      name: 'package-name',
      // registryAdapter,
      version: '^1.2.3' // semver range or specific version
    });

    package.packageMethod();
  } catch (error) {
    // something failed loading the package
  }
};
```

### install

Installs a specific version of a package (does not register it)

```js
import {install} from 'runtime-packages';

const installPromise = install({
  packagesPath: '/path/to/keep/packages/in',
  name: 'package-name',
  // registryAdapter,
  version: '1.2.3'
});
```

### register

Registers a specific version of a package as installed (currently just in memory, adapters to come)

```js
import {register} from 'runtime-packages';

const registerPromise = register({
  name: 'package-name',
  // registryAdapter,
  version: '1.2.3'
});
```

### list

Lists packages in the registry

```js
import {list} from 'runtime-packages';

const listPromise = list({
  // registryAdapter
});
```

Example:
```js
[
  {
    name: 'package-a',
    versions: ['1.2.3', '2.0.0']
  },
  {
    name: 'package-b',
    versions: ['3.4.5', '3.4.6', '3.4.6-rc.0']
  }
]
```

### registry adapter

`load`, `install`, `register` and `list` all can accept a `registerAdapter` parameter, which should be an object with the following properties:

```js
const registryAdapter = {
  add: ({name, version}) => {}
  get = ({name}),
  list = () => <list of packages in registry, as in the return of `list`>
}
```

## Testing

To run the tests:

```bash
$ npm install
$ npm test
```

## Contributing

If you wish to submit a pull request please update and/or create new tests for any changes you make and ensure the linting and tests pass.

## License

MIT - see [LICENSE](https://github.com/mailonline/runtime-packages/blob/master/LICENSE)

[travis-image]: https://travis-ci.org/mailonline/runtime-packages.svg?branch=master
[travis-url]: https://travis-ci.org/mailonline/runtime-packages
[coveralls-image]: https://coveralls.io/repos/github/mailonline/runtime-packages/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/mailonline/runtime-packages?branch=master
