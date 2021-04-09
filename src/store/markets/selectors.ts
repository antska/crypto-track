import { createSelector } from 'reselect';

import { MarketsState } from './types';

const getMarketsState = ({ markets }: MarketsState) => {
  return markets;
};

export const getCoinMarketsList = () =>
  createSelector(getMarketsState, (markets) => markets.list);

export const getIsLoadingMarkets = () =>
  createSelector(getMarketsState, (markets) => markets.loading);

export const getHasErrorMarkets = () =>
  createSelector(getMarketsState, (markets) => markets.error);

export const getLastUpdated = () =>
  createSelector(getMarketsState, (markets) => markets.lastUpdated);
