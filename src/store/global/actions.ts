import * as types from './actionTypes';
import { Currency } from './types';

export const setTheme = (theme: string) => ({
  type: types.SET_THEME,
  theme,
});

export const setCurrency = (currency: Currency) => ({
  type: types.SET_CURRENCY,
  currency,
});
