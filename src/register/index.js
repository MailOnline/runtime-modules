import memoryAdapter from '../registry/memoryAdapter';

// eslint-disable-next-line require-await
const register = async ({registryAdapter = memoryAdapter, name, version}) =>
  registryAdapter.add({
    name,
    version
  });

export default register;
