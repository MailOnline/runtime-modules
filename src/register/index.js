import {add} from '../registryInMemory';

// eslint-disable-next-line require-await
const register = async ({name, version}) => add({
  name,
  version
});

export default register;
