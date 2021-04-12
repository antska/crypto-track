import { LOCALSTORAGE_KEY } from 'constants/index';
import { State } from 'store/global/types';

export default {
  loadState() {
    try {
      const serializedState = localStorage.getItem(LOCALSTORAGE_KEY);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  },
  saveState(state: { global: State | undefined }) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
  },
};
