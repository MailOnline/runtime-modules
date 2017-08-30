import {compare} from 'semver';

const registry = new Map();

const add = ({name, version}) => {
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

const get = (name) => registry.get(name) || null;

const list = () => {
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
