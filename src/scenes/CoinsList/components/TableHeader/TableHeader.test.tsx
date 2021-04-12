import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithRedux } from 'utils/testing';
import TableHeader from './TableHeader';

describe('<TableHeader />', () => {
  it('will render the last updated date on the header', () => {
    renderWithRedux(
      <BrowserRouter>
        <TableHeader page={3} />
      </BrowserRouter>,
      {
        initialState: { markets: { lastUpdated: 'Sun Apr 11 2021' } },
      },
    );

    const text = screen.getByText(/Sun Apr 11 2021/i);

    expect(text).toBeInTheDocument();
  });

  it('will navigate to next page', () => {
    renderWithRedux(
      <BrowserRouter>
        <TableHeader page={2} />
      </BrowserRouter>,
      {},
    );

    userEvent.click(screen.getByTestId('forward-btn'));

    expect(window.location.pathname).toEqual('/markets/3');
  });

  it('will navigate to previous page', () => {
    renderWithRedux(
      <BrowserRouter>
        <TableHeader page={2} />
      </BrowserRouter>,
      {},
    );

    userEvent.click(screen.getByTestId('back-btn'));

    expect(window.location.pathname).toEqual('/markets/1');
  });

  it('will have back button disabled on 1st page', () => {
    renderWithRedux(
      <BrowserRouter>
        <TableHeader page={1} />
      </BrowserRouter>,
      {},
    );

    expect(screen.getByTestId('disabled-back-btn')).toHaveStyle({
      pointerEvents: 'none',
    });
  });
});
