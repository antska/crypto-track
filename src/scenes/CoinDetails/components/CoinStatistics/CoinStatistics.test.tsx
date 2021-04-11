import React from 'react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithRedux } from 'utils/testing';
import initialState from 'store/coin/initialState';
import { State } from 'store/coin/types';
import CoinStatistics from './CoinStatistics';

const renderCoinStats = (state: State = initialState) =>
  renderWithRedux(
    <BrowserRouter>
      <CoinStatistics />
    </BrowserRouter>,
    {
      initialState: { coin: state },
    },
  );

describe('<CoinStatistics />', () => {
  it('will render statistics tables and graphs', () => {
    renderCoinStats();

    expect(screen.getByTestId('value-stats-table')).toBeInTheDocument();
    expect(screen.getByTestId('social-stats-table')).toBeInTheDocument();
    expect(screen.getByTestId('reputation-graphs')).toBeInTheDocument();
  });
});
