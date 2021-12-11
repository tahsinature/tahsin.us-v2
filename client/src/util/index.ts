import packageJson from '../../package.json';

export const wait = (numOfSec: number): Promise<void> => {
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, numOfSec * 1000);
  });
};

export const getAppVersion = () => {
  return packageJson.version;
};
