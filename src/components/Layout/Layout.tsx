import React from 'react';
import styled from 'styled-components';

import { queries } from '../../constants';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const SMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
  min-height: calc(100vh - 40px);
  width: 100%;

  @media screen and (min-width: ${queries.mobileS}) {
    max-width: 84vw;
  }

  @media screen and (min-width: ${queries.laptop}) {
    max-width: 64vw;
  }
`;

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <SMain>{children}</SMain>
  </>
);

export default Layout;
