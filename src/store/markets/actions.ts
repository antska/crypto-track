import axios from 'axios';
import { Dispatch } from 'redux';
import moment from 'moment';

import { BASE_API_ENDPOINT } from 'constants/index';
import * as types from './actionTypes';

export const fetchMarketsList = ({
  page,
  currency,
}: {
  page: number;
  currency?: string;
}) => async (dispatch: Dispatch) => {
  dispatch({ type: types.GET_MARKETS_LIST_REQUEST });
  let response;

  try {
    response = await axios.get(
      `${BASE_API_ENDPOINT}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`,
    );

    if (response.status !== 200) {
      dispatch({
        type: types.GET_MARKETS_LIST_FAILED,
        error: response.statusText,
      });
    }

    dispatch({
      type: types.GET_MARKETS_LIST_SUCCESS,
      data: response.data,
      timestamp: moment().format('MMMM Do YYYY, HH:MM:SS'),
    });
  } catch (err) {
    dispatch({
      type: types.GET_MARKETS_LIST_FAILED,
      error: err.message,
    });
  }
};
