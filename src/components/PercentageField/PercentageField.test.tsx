import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithRedux } from 'utils/testing';
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
      renderWithRedux(<PercentageField perc={percent} />);

      expect(screen.getByTestId(icon)).toBeInTheDocument();
      expect(screen.getByTestId(icon)).toHaveStyle({ color });
    },
  );
});
