import { LOCALSTORAGE_KEY } from 'constants/index';
import localStore from './index';

describe('test localStore', () => {
  it('will correctly load localstorage state', () => {
    localStore.saveState({ [LOCALSTORAGE_KEY]: { theme: 'dark' } });

    const loaded = localStore.loadState();

    expect(loaded).toEqual({ [LOCALSTORAGE_KEY]: { theme: 'dark' } });
  });

  it('will return undefined when error exists while parsing localStorage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {},
      writable: true,
    });

    expect(localStore.loadState()).toEqual(undefined);
  });
});
