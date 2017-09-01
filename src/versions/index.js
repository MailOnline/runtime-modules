import memoryAdapter from '../registry/memoryAdapter';

const versions = ({registryAdapter = memoryAdapter, name}) => {
  const packageInfo = registryAdapter.get({name}) || null;

  return packageInfo && packageInfo.versions;
};

export default versions;
