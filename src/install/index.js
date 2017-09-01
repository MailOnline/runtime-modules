import {install as npmInstall, load as npmLoad} from '../npm';

const install = async ({packagesPath, name, version}) => {
  if (!packagesPath || !name || !version) {
    throw new Error('Need to specify packagesPath, name and version');
  }

  await npmLoad({
    loaded: false
  });

  // catch errors
  await npmInstall(
    `${packagesPath}/${name}/${version}`,
    [`${name}@${version}`]
  );
};

export default install;
