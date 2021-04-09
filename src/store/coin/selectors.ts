import { createSelector } from 'reselect';

import { CoinState } from './types';

const getCoinState = ({ coin }: CoinState) => {
  return coin;
};

export const getCoinDetails = () =>
  createSelector(getCoinState, (coin) => coin.details);
