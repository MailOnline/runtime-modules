import {maxSatisfying} from 'semver';
import versionsInRegistry from '../versions';

const load = ({modulesPath, name, version}) => {
  if (!modulesPath || !name || !version) {
    throw new Error('Need to specify modulesPath, name and version');
  }

  const moduleVersions = versionsInRegistry(name);

  if (!moduleVersions) {
    throw new Error('No versions of the module found in the registry');
  }

  const satisfyingVersion = maxSatisfying(moduleVersions, version);

  if (!satisfyingVersion) {
    throw new Error(`Required version ${version} cannot be satisfied by any version in registry`);
  }

  const requirePath = `${modulesPath}/${name}/${satisfyingVersion}/node_modules/${name}`;

  return import(requirePath);
};

export default load;
