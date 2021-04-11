import React from 'react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { mockCoinDetails, renderWithRedux } from 'utils/testing';
import initialState from 'store/coin/initialState';
import { State } from 'store/coin/types';
import DetailsHeader from './DetailsHeader';

const renderDetailsHeader = (state: State = initialState) =>
  renderWithRedux(
    <BrowserRouter>
      <DetailsHeader />
    </BrowserRouter>,
    {
      initialState: { coin: state },
    },
  );

describe('<DetailsHeader />', () => {
  it('will render header with no data', () => {
    renderDetailsHeader();

    expect(screen.getByTestId('title-container')).toBeInTheDocument();
  });

  it('will render homepage link with correct href', () => {
    const mockData = mockCoinDetails();
    renderDetailsHeader(mockData);

    expect(screen.getByTestId('homepage-link')).toHaveAttribute(
      'href',
      mockData.details.links.homepage[0],
    );
  });

  it('will render twitter and telegram links', () => {
    const mockData = mockCoinDetails({ twitter: 'abc', telegram: 'teltest' });
    renderDetailsHeader(mockData);

    expect(screen.getByTestId('twitter-link')).toHaveAttribute(
      'href',
      'https://twitter.com/abc',
    );

    expect(screen.getByTestId('telegram-link')).toHaveAttribute(
      'href',
      'https://t.me/teltest',
    );
  });
});
