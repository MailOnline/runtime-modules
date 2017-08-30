import {get} from '../registryInMemory';

const versions = (name) => {
  const moduleInfo = get(name) || null;

  return moduleInfo && moduleInfo.versions;
};

export default versions;
