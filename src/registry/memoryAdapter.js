import {compare} from 'semver';

const defaultRegistry = new Map();

const add = ({name, version, registry = defaultRegistry}) => {
  const current = registry.get(name) || {
    name,
    versions: []
  };

  if (current.versions.includes(version)) {
    throw new Error('Version already in registry');
  }

  const newVersions = current.versions.slice();

  newVersions.push(version);
  newVersions.sort(compare);

  registry.set(
    name,
    {
      ...current,
      versions: newVersions
    }
  );
};

const get = ({name, registry = defaultRegistry}) => registry.get(name) || null;

const list = ({registry = defaultRegistry} = {}) => {
  const values = [];

  registry.forEach((value) => {
    values.push(value);
  });

  return values;
};

export {
  add,
  get,
  list
};

const memoryAdapter = {
  add,
  get,
  list
};

export default memoryAdapter;
