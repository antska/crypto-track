import React from 'react';
import { render, screen } from '@testing-library/react';

import PercentageField from './PercentageField';

describe('<PercentageField />', () => {
  it.each`
    percent | icon           | color
    ${0.9}  | ${'up-icon'}   | ${'green'}
    ${0}    | ${'dash-icon'} | ${''}
    ${-1.5} | ${'down-icon'} | ${'red'}
  `(
    'will render $icon when percent is $percent',
    ({ percent, icon, color }) => {
      render(<PercentageField perc={percent} />);

      expect(screen.getByTestId(icon)).toBeInTheDocument();
      expect(screen.getByTestId(icon)).toHaveStyle({ color });
    },
  );
});
