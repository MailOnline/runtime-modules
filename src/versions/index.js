import memoryAdapter from '../registry/memoryAdapter';

const versions = ({registryAdapter = memoryAdapter, name}) => {
  const moduleInfo = registryAdapter.get({name}) || null;

  return moduleInfo && moduleInfo.versions;
};

export default versions;
