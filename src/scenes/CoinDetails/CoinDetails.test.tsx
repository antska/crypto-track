import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import {
  mockCoinDetails,
  mockFetchCoinDetailsError,
  mockFetchCoinDetailsSuccess,
  renderWithRedux,
} from 'utils/testing';
import initialState from 'store/coin/initialState';
import { State } from 'store/coin/types';
import userEvent from '@testing-library/user-event';
import { State as GlobalState } from 'store/global/types';
import initialGlobalState from 'store/global/initialState';
import CoinDetails from './CoinDetails';

const renderCoinDetails = (
  state: State = initialState,
  globalState: GlobalState = initialGlobalState,
) =>
  renderWithRedux(
    <BrowserRouter>
      <CoinDetails />
    </BrowserRouter>,
    {
      initialState: { coin: state, global: globalState },
    },
  );

describe('<CoinDetails />', () => {
  afterEach(() => jest.restoreAllMocks());
  it('will render description block in dark mode', async () => {
    mockFetchCoinDetailsSuccess();
    const mockData = mockCoinDetails();
    renderCoinDetails(mockData, {
      theme: 'dark',
      currency: initialGlobalState.currency,
    });

    await waitFor(() => screen.getByTestId('description-block'));

    expect(screen.getByTestId('description-block')).toBeInTheDocument();
  });

  it('will navigate to error page when error exists', async () => {
    const mockData = mockCoinDetails({ error: 'an error' });
    mockFetchCoinDetailsError();
    renderCoinDetails(mockData);

    expect(window.location.pathname).toEqual('/error');
  });

  it('will render description block with no expand more icon', async () => {
    mockFetchCoinDetailsSuccess();
    const mockData = mockCoinDetails({ description: 'A small description' });
    renderCoinDetails(mockData);

    expect(screen.queryByTestId('expand-btn')).not.toBeInTheDocument();
  });

  it('will click on expand more button', async () => {
    mockFetchCoinDetailsSuccess();
    const mockData = mockCoinDetails();
    renderCoinDetails(mockData);

    await waitFor(() => screen.getByTestId('description-block'));

    userEvent.click(screen.getByTestId('expand-btn'));

    expect(screen.queryByTestId('expand-btn')).not.toBeInTheDocument();
  });
});
