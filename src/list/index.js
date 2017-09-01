import memoryAdapter from '../registry/memoryAdapter';

const list = ({registryAdapter = memoryAdapter} = {}) => registryAdapter.list();

export default list;
