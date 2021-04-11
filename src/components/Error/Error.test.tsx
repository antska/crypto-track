import React from 'react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from 'utils/testing';
import Error from './Error';

describe('<Error />', () => {
  it('will render the error component with a not found message', () => {
    renderWithRedux(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );

    const text = screen.getByText(/Nothing found here/i);

    expect(text).toBeInTheDocument();
  });

  it('will display error from store', () => {
    const errorText = 'custom erro';
    renderWithRedux(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
      { initialState: { coin: { error: errorText } } },
    );

    const error = screen.getByText(errorText);

    expect(error).toBeInTheDocument();
  });

  it('will go home after clicking the button', () => {
    renderWithRedux(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );

    userEvent.click(screen.getByTestId('go-home'));

    expect(window.location.pathname).toEqual('/');
  });
});
