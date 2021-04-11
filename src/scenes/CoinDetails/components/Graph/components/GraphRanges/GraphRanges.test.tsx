import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from 'utils/testing';
import initialState from 'store/coin/initialState';
import { State } from 'store/coin/types';
import * as actions from 'store/coin/actions';
import GraphRanges from './GraphRanges';
import { CHART_RANGES } from '../../../../../../constants';

const renderGraphRanges = (state: State = initialState) =>
  renderWithRedux(<GraphRanges />, {
    initialState: { coin: state },
  });

describe('<GraphRanges />', () => {
  it('will render all graph ranges', () => {
    renderGraphRanges();

    expect(screen.getByTestId('graph-ranges').children).toHaveLength(
      CHART_RANGES.length,
    );
  });

  it('will change graph duration', () => {
    jest.spyOn(actions, 'setGraphDuration');
    renderGraphRanges();

    userEvent.click(screen.getByText('1d'));

    expect(actions.setGraphDuration).toHaveBeenCalledWith(1);
  });
});
