import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithRedux } from 'utils/testing';
import initialState from 'store/global/initialState';
import { State } from 'store/global/types';
import * as actions from 'store/global/actions';
import Header from './Header';

const renderHeader = (state: State = initialState) =>
  renderWithRedux(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    {
      initialState: { global: state },
    },
  );

describe('<Header />', () => {
  afterEach(() => jest.restoreAllMocks());
  it('will render the header', () => {
    renderHeader();

    expect(screen.getByTestId('right-menu')).toBeInTheDocument();
  });

  it('will change currency to eur and theme to dark', () => {
    jest.spyOn(actions, 'setCurrency');
    jest.spyOn(actions, 'setTheme');
    renderHeader();

    userEvent.click(screen.getByTestId('dollar-icon'));
    userEvent.click(screen.getByTestId('sun-icon'));

    expect(actions.setTheme).toHaveBeenCalledWith('dark');
    expect(actions.setCurrency).toHaveBeenCalledWith({
      name: 'eur',
      symbol: '€',
    });
  });

  it('will change currency to usd and theme to light', () => {
    jest.spyOn(actions, 'setCurrency');
    jest.spyOn(actions, 'setTheme');
    renderHeader({ theme: 'dark', currency: { name: 'eur', symbol: '€' } });

    userEvent.click(screen.getByTestId('euro-icon'));
    userEvent.click(screen.getByTestId('moon-icon'));

    expect(actions.setTheme).toHaveBeenCalledWith('light');
    expect(actions.setCurrency).toHaveBeenCalledWith({
      name: 'usd',
      symbol: '$',
    });
  });
});
