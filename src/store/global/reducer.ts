/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';

import { AnyAction } from 'redux';
import initialState from './initialState';
import { State } from './types';
import * as types from './actionTypes';

export default produce(
  (draft: Draft<State> = initialState, action: AnyAction) => {
    switch (action.type) {
      case types.SET_THEME: {
        const { theme } = action;
        draft.theme = theme;

        return draft;
      }
      case types.SET_CURRENCY: {
        const { currency } = action;
        draft.currency = currency;

        return draft;
      }
      default:
        return draft;
    }
  },
);
