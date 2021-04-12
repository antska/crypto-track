const KEY = 'cryptotrack';

export default {
  loadState() {
    try {
      const serializedState = localStorage.getItem(KEY);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  },
  saveState(state: any) {
    localStorage.setItem(KEY, JSON.stringify(state));
  },
};
