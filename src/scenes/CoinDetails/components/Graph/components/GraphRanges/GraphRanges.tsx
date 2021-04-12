import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getCoinGraphDuration } from 'store/coin/selectors';
import { setGraphDuration } from 'store/coin/actions';
import { CHART_RANGES } from '../../../../../../constants';

const SContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: flex-start;
  margin: 10px 0;
`;

const SButton = styled.button<{ isActive: boolean }>`
  display: flex;
  cursor: pointer;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme, isActive }) =>
    isActive ? theme.palette.secondary.main : theme.palette.primary.light};
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary.main : theme.palette.secondary.main};
  padding: 8px;
  border: 1px solid
    ${({ theme, isActive }) =>
      isActive ? theme.palette.secondary.main : theme.palette.primary.main};
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &:hover {
    border: none;
    transition: background-color 600ms;
    background: ${({ theme }) => theme.palette.secondary.main};
    color: white;
  }
`;

const GraphRanges = () => {
  const dispatch = useDispatch();
  const duration = useSelector(getCoinGraphDuration());

  const handleChangeDuration = (val: number | string) => {
    dispatch(setGraphDuration(val));
  };

  return (
    <SContainer data-test="graph-ranges">
      {CHART_RANGES.map((range) => (
        <SButton
          key={range.name}
          isActive={duration === range.value}
          type="button"
          onClick={() => handleChangeDuration(range.value)}
        >
          {range.name}
        </SButton>
      ))}
    </SContainer>
  );
};

export default GraphRanges;
