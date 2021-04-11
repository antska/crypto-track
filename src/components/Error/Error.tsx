import React from 'react';
import { BsGraphDown } from 'react-icons/bs';
import styled from 'styled-components';
import { FaHome } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getCoinDetailsError } from 'store/coin/selectors';
import { getHasErrorMarkets } from 'store/markets/selectors';

const SContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 64vw;
  height: 100vh;
`;

const SH1 = styled.h1`
  font-size: 3rem;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.palette.primary.ligth};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 10px;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.palette.secondary.alt};
    border: none;
  }
`;

const Error = () => {
  const coinError = useSelector(getCoinDetailsError());
  const marketsError = useSelector(getHasErrorMarkets());

  const errorMessage = coinError || marketsError;

  return (
    <SContainer>
      <SH1>{errorMessage || 'NOTHING FOUND HERE :('}</SH1>
      <BsGraphDown size="7em" color="darkred" />
      <SLink to="/">
        <FaHome />
        GO HOME
      </SLink>
    </SContainer>
  );
};

export default Error;
