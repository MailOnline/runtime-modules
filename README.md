# runtime-modules

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Runtime npm module registry.

## Installation

This is a server-side-only module, intended to run in a **Node.JS** environment.

Install using [npm](http://npmjs.org/):

```bash
$ npm install runtime-modules
```

## Usage

### load

Returns a promise resolving to the module if it's available in the registry

```js
import {load} from 'runtime-modules';

const doSomething = async () => {
  try {
    const module = await load({
      modulesPath: '/path/to/keep/modules/in',
      name: 'module-name',
      version: '^1.2.3' // semver range or specific version
    });

    module.moduleMethod();
  } catch (error) {
    // something failed loading the module
  }
};
```

### install

Installs a specific version of a module (does not register it)

```js
import {install} from 'runtime-modules';

const installPromise = install({
  modulesPath: '/path/to/keep/modules/in',
  name: 'module-name',
  version: '1.2.3'
});
```

### register

Registers a specific version of a module as installed (currently just in memory, adapters to come)

```js
import {register} from 'runtime-modules';

const registerPromise = register({
  name: 'module-name',
  version: '1.2.3'
});
```

### list

Lists modules in the registry

```js
import {list} from 'runtime-modules';

const listPromise = list();
```

Example:
```js
[
  {
    name: 'module-a',
    versions: ['1.2.3', '2.0.0']
  },
  {
    name: 'module-b',
    versions: ['3.4.5', '3.4.6', '3.4.6-rc.0']
  }
]
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

MIT - see [LICENSE](https://github.com/mailonline/runtime-modules/blob/master/LICENSE)

[travis-image]: https://travis-ci.org/mailonline/runtime-modules.svg?branch=master
[travis-url]: https://travis-ci.org/mailonline/runtime-modules
[coveralls-image]: https://coveralls.io/repos/github/mailonline/runtime-modules/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/mailonline/runtime-modules?branch=master
