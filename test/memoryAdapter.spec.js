import {add, get, list} from '../src/registry/memoryAdapter';

describe('memoryAdapter', () => {
  it('should add and sort multiple versions', () => {
    const registry = new Map();
    const firstPackage = '@scope/package-name';
    const secondPackage = 'other-package';
    const versionsToAdd = ['3.2.1', '1.2.3', '1.3.1'];
    const expectedVersions = ['1.2.3', '1.3.1', '3.2.1'];

    [firstPackage, secondPackage].forEach((name) => {
      // eslint-disable-next-line max-nested-callbacks
      versionsToAdd.forEach((version) => {
        add({
          name,
          registry,
          version
        });
      });
    });

    [firstPackage, secondPackage].forEach((name) => {
      expect(registry.get(name).versions).toEqual(expectedVersions);
    });
  });

  it('should get package by name', () => {
    const registry = new Map();
    const name = '@scope/package-name';
    const versions = ['1.2.3', '1.3.1', '3.2.1'];

    versions.forEach((version) => {
      add({
        name,
        registry,
        version
      });
    });

    const packageInfo = get({
      name,
      registry
    });

    expect(packageInfo).toMatchSnapshot();
  });

  it('should list packages in the registry', () => {
    const registry = new Map();
    const firstPackage = '@scope/package-name';
    const secondPackage = 'other-package';
    const versionsToAdd = ['3.2.1', '1.2.3', '1.3.1'];

    [firstPackage, secondPackage].forEach((name) => {
      // eslint-disable-next-line max-nested-callbacks
      versionsToAdd.forEach((version) => {
        add({
          name,
          registry,
          version
        });
      });
    });

    expect(list({registry})).toMatchSnapshot();
  });
});
