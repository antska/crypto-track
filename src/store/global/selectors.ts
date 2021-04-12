import { createSelector } from 'reselect';

import { GlobalState } from './types';

const getGlobalState = ({ global }: GlobalState) => {
  return global;
};

export const getTheme = () =>
  createSelector(getGlobalState, (global) => global.theme);

export const getCurrency = () =>
  createSelector(getGlobalState, (global) => global.currency);
