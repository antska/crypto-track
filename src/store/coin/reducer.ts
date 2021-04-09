/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';

import { AnyAction } from 'redux';
import initialState from './initialState';
import { State } from './types';
import * as types from './actionTypes';

export default produce(
  (draft: Draft<State> = initialState, action: AnyAction) => {
    switch (action.type) {
      case types.GET_COIN_DETAILS_REQUEST: {
        draft.loading = true;

        return draft;
      }
      case types.GET_COIN_DETAILS_SUCCESS: {
        const { data } = action;
        draft.loading = false;
        draft.details = data;

        return draft;
      }
      case types.GET_COIN_DETAILS_FAILED: {
        draft.loading = false;
        draft.error = true;

        return draft;
      }
      default:
        return draft;
    }
  },
);
