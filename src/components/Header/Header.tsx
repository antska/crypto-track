import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SNav = styled.nav`
  background-color: #f5f5f5;
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
`;

const SLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: #656565;
`;

const Header = () => (
  <SNav>
    <SLink to="/">CryptoTrack</SLink>
    <SRightMenu>
      <span>Menu 1</span>
      <span>Menu 2</span>
    </SRightMenu>
  </SNav>
);

export default Header;
