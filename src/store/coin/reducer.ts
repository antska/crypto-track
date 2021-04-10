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
        draft.detailsLoading = true;

        return draft;
      }
      case types.GET_COIN_DETAILS_SUCCESS: {
        const { details } = action;
        draft.detailsLoading = false;
        draft.details = details;

        return draft;
      }
      case types.GET_COIN_DETAILS_FAILED: {
        draft.detailsLoading = false;
        draft.error = true;

        return draft;
      }
      case types.GET_COIN_GRAPH_REQUEST: {
        draft.graphLoading = true;

        return draft;
      }
      case types.GET_COIN_GRAPH_SUCCESS: {
        const { data } = action;
        draft.graphLoading = false;
        draft.graphData = data;

        return draft;
      }
      case types.GET_COIN_GRAPH_FAILED: {
        draft.graphLoading = false;
        draft.error = true;

        return draft;
      }
      case types.SET_COIN_GRAPH_DURATION: {
        const { duration } = action;
        draft.graphDuration = duration;

        return draft;
      }
      default:
        return draft;
    }
  },
);
