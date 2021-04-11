import React from 'react';
import { BsGraphDown } from 'react-icons/bs';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getCoinDetailsError } from 'store/coin/selectors';
import { getHasErrorMarkets } from 'store/markets/selectors';
import SEO from 'components/SEO';
import { queries } from '../../constants';
import Layout from '../Layout';

const SH1 = styled.h1`
  margin-top: 10rem;
  font-size: 3rem;

  @media all and (max-width: ${queries.tablet}) {
    text-align: center;
  }
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
    <Layout>
      <SEO title="Crypto Track - Error page" />
      <SH1 data-test="error-msg">{errorMessage || 'NOTHING FOUND HERE :('}</SH1>
      <BsGraphDown size="7em" color="darkred" />
      <SLink data-test="go-home" to="/">
        <FaHome />
        GO HOME
      </SLink>
    </Layout>
  );
};

export default Error;
