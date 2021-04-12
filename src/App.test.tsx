import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('<App />', () => {
  it('will render the app', () => {
    render(<App />);

    const baseText = screen.getByText(/CryptoTrack/i);
    expect(baseText).toBeInTheDocument();
  });

  it('will change theme to dark mode', () => {
    render(<App />);

    userEvent.click(screen.getByTestId('sun-icon'));

    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });
});
