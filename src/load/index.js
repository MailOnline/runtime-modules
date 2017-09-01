import {maxSatisfying} from 'semver';
import memoryAdapter from '../registry/memoryAdapter';
import versionsInRegistry from '../versions';

const load = ({registryAdapter = memoryAdapter, packagesPath, name, version}) => {
  if (!packagesPath || !name || !version) {
    throw new Error('Need to specify packagesPath, name and version');
  }

  const packageVersions = versionsInRegistry({
    name,
    registryAdapter
  });

  if (!packageVersions) {
    throw new Error('No versions of the package found in the registry');
  }

  const satisfyingVersion = maxSatisfying(packageVersions, version);

  if (!satisfyingVersion) {
    throw new Error(`Required version ${version} cannot be satisfied by any version in registry`);
  }

  const requirePath = `${packagesPath}/${name}/${satisfyingVersion}/node_modules/${name}`;

  return import(requirePath);
};

export default load;
