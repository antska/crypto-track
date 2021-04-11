import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SNav = styled.nav`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 20px 20px;
`;

const SRightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.palette.primary.ligth};
`;

const SLink = styled(Link)`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
`;

const Header = () => (
  <SNav>
    <SLink to="/">CryptoTrack</SLink>
    <SRightMenu>
      <span>en</span>
      <span>USD($)</span>
    </SRightMenu>
  </SNav>
);

export default Header;
