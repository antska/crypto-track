import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';

import {
  mockFetchMarketsError,
  mockFetchMarketsSuccess,
  mockMarkets,
  renderWithRedux,
} from 'utils/testing';
import initialState from 'store/markets/initialState';
import { State } from 'store/markets/types';
import * as actions from 'store/markets/actions';
import CoinsList from './CoinsList';

const renderCoinsList = (state: State = initialState, withHistory = false) =>
  withHistory
    ? renderWithRedux(
        <MemoryRouter initialEntries={['markets/2']}>
          <Route path="markets/:page">
            <CoinsList />
          </Route>
        </MemoryRouter>,
        {
          initialState: { markets: state },
        },
      )
    : renderWithRedux(
        <BrowserRouter>
          <CoinsList />
        </BrowserRouter>,
        {
          initialState: { markets: state },
        },
      );

describe('<CoinsList />', () => {
  it('will render coins list with no items', () => {
    renderCoinsList();

    expect(screen.queryByTestId('coin-item-row')).not.toBeInTheDocument();
  });

  it('will render coins list items', async () => {
    const mockData = mockMarkets();
    mockFetchMarketsSuccess();
    renderCoinsList(mockData, true);

    await waitFor(() => screen.getAllByTestId('coin-item-row'));

    expect(screen.getAllByTestId('coin-item-row')).toHaveLength(2);
  });

  it('will navigate to error page when error exists', async () => {
    const mockData = mockMarkets({ error: 'an error' });
    mockFetchMarketsError();
    renderCoinsList(mockData);

    expect(window.location.pathname).toEqual('/error');
  });

  it('will request for data again after an interval', async () => {
    jest.useFakeTimers();
    jest.spyOn(actions, 'fetchMarketsList');

    const mockData = mockMarkets();
    renderCoinsList(mockData);
    jest.advanceTimersByTime(30000);

    expect(actions.fetchMarketsList).toHaveBeenCalled();
  });
});
