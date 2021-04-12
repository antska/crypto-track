import React from 'react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithRedux } from 'utils/testing';
import initialState from 'store/coin/initialState';
import { State } from 'store/coin/types';
import initialGlobalState from 'store/global/initialState';
import { State as GlobalState } from 'store/global/types';
import CoinStatistics from './CoinStatistics';

const renderCoinStats = (
  state: State = initialState,
  globalState: GlobalState = initialGlobalState,
) =>
  renderWithRedux(
    <BrowserRouter>
      <CoinStatistics />
    </BrowserRouter>,
    {
      initialState: { coin: state, global: globalState },
    },
  );

describe('<CoinStatistics />', () => {
  it('will render statistics tables and graphs', () => {
    renderCoinStats();

    expect(screen.getByTestId('value-stats-table')).toBeInTheDocument();
    expect(screen.getByTestId('social-stats-table')).toBeInTheDocument();
    expect(screen.getByTestId('reputation-graphs')).toBeInTheDocument();
  });
  it('will render graph in dark mode', () => {
    renderCoinStats(initialState, {
      theme: 'dark',
      currency: initialGlobalState.currency,
    });

    expect(screen.getByText('Up Votes')).toHaveStyle({
      color: 'white',
    });
  });
});
