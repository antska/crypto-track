import localStore from './index';

describe('<Error />', () => {
  it('will correctly load localstorage state', () => {
    localStore.saveState({ cryptotrack: { theme: 'dark' } });

    const loaded = localStore.loadState();

    expect(loaded).toEqual({ cryptotrack: { theme: 'dark' } });
  });

  it('will return undefined when error in localStorage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {},
      writable: true,
    });

    expect(localStore.loadState()).toEqual(undefined);
  });
});
