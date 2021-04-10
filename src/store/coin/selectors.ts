import { createSelector } from 'reselect';

import { CoinState } from './types';

const getCoinState = ({ coin }: CoinState) => {
  return coin;
};

export const getCoinDetails = () =>
  createSelector(getCoinState, (coin) => coin.details);

export const getCoinGraphData = () =>
  createSelector(getCoinState, (coin) => coin.graphData);

export const getCoinGraphDuration = () =>
  createSelector(getCoinState, (coin) => coin.graphDuration);

export const getCoinGraphLoading = () =>
  createSelector(getCoinState, (coin) => coin.graphLoading);

export const getCoinDetailsLoading = () =>
  createSelector(getCoinState, (coin) => coin.detailsLoading);
