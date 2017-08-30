import {install as npmInstall, load as npmLoad} from '../npm';

const install = async ({modulesPath, name, version}) => {
  if (!modulesPath || !name || !version) {
    throw new Error('Need to specify modulesPath, name and version');
  }

  await npmLoad({
    loaded: false
  });

  // catch errors
  await npmInstall(
    `${modulesPath}/${name}/${version}`,
    [`${name}@${version}`]
  );
};

export default install;
