/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';

import { AnyAction } from 'redux';
import initialState from './initialState';
import { State } from './types';
import * as types from './actionTypes';

export default produce(
  (draft: Draft<State> = initialState, action: AnyAction) => {
    switch (action.type) {
      case types.GET_MARKETS_LIST_REQUEST: {
        draft.loading = true;

        return draft;
      }
      case types.GET_MARKETS_LIST_SUCCESS: {
        const { data, timestamp } = action;
        draft.loading = false;
        draft.list = data;
        draft.lastUpdated = timestamp;

        return draft;
      }
      case types.GET_MARKETS_LIST_FAILED: {
        draft.loading = false;
        draft.error = true;

        return draft;
      }
      default:
        return draft;
    }
  },
);
