import { Dispatch } from 'redux';
import axios from 'axios';

import { BASE_API_ENDPOINT } from 'constants/index';
import * as types from './actionTypes';

type FetchParams = {
  coin: string;
  days?: string | number;
  currency: string;
};

export const setGraphDuration = (duration: string | number) => ({
  type: types.SET_COIN_GRAPH_DURATION,
  duration,
});

export const fetchCoinGraph = ({
  coin,
  days = 'max',
  currency,
}: FetchParams) => async (dispatch: Dispatch) => {
  dispatch({ type: types.GET_COIN_GRAPH_REQUEST });
  let response;

  try {
    response = await axios.get(
      `${BASE_API_ENDPOINT}/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}`,
    );

    if (response.status !== 200) {
      dispatch({
        type: types.GET_COIN_GRAPH_FAILED,
        error: response.statusText,
      });
    }

    dispatch({
      type: types.GET_COIN_GRAPH_SUCCESS,
      data: response.data.prices,
    });
  } catch (err) {
    dispatch({
      type: types.GET_COIN_GRAPH_FAILED,
      error: err.message,
    });
  }
};

export const fetchCoinDetails = ({ coin }: Pick<FetchParams, 'coin'>) => async (
  dispatch: Dispatch,
) => {
  dispatch({ type: types.GET_COIN_DETAILS_REQUEST });
  let response;

  try {
    response = await axios.get(`${BASE_API_ENDPOINT}/coins/${coin}`);

    if (response.status !== 200) {
      dispatch({
        type: types.GET_COIN_DETAILS_FAILED,
        error: response.statusText,
      });
    }

    dispatch({
      type: types.GET_COIN_DETAILS_SUCCESS,
      details: response.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_COIN_DETAILS_FAILED,
      error: err.message,
    });
  }
};
