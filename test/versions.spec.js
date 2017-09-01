import versions from '../src/versions';

describe('versions', () => {
  it('should list package versions through adapter', () => {
    const registryAdapter = {
      get: jest.fn()
    };
    const expectedVersions = ['1.2.3', '3.4.5'];
    const name = 'package-name';

    registryAdapter.get.mockReturnValue({
      name,
      versions: expectedVersions
    });

    const returnedVersions = versions({
      name,
      registryAdapter
    });

    expect(returnedVersions).toEqual(expectedVersions);
    expect(registryAdapter.get).toHaveBeenCalledTimes(1);
    expect(registryAdapter.get).toHaveBeenCalledWith({name});
  });

  it('should return null when package not in registry', () => {
    const registryAdapter = {
      get: jest.fn()
    };
    const name = 'package-name';

    registryAdapter.get.mockReturnValue(null);

    const returnedVersions = versions({
      name,
      registryAdapter
    });

    expect(returnedVersions).toEqual(null);
    expect(registryAdapter.get).toHaveBeenCalledTimes(1);
    expect(registryAdapter.get).toHaveBeenCalledWith({name});
  });
});
