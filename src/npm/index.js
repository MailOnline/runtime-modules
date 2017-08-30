// Promisified NPM methods
import npm from 'npm';

const install = (where, args) =>
  new Promise((resolve, reject) => {
    npm.commands.install(where, args, (error, data) => {
      if (error) {
        return reject(error);
      }

      return resolve(data);
    });
  });

const load = (config) =>
  new Promise((resolve, reject) => {
    npm.load(config, (error) => {
      if (error) {
        return reject(error);
      }

      return resolve();
    });
  });

export {
  install,
  load
};
