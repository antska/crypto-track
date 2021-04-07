import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('will render the app', () => {
    render(<App />);

    const baseText = screen.getByText(/Crypto Track App/i);
    expect(baseText).toBeInTheDocument();
  });
});
