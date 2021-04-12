import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { QUERIES } from 'constants/index';

export const STableWrapper = styled.div`
  background: ${({ theme }) => theme.palette.primary.light};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 10px;
  min-height: 100vh;
  overflow-x: auto;
  width: 100%;
`;

export const STable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  & td {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.gray};
    padding: 1rem 2rem;
  }

  & th {
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.gray};
    padding: 1rem 2rem;
    text-align: left;
  }

  & tbody > tr:last-child > td {
    border-bottom: none;
  }

  // hide the last 2 columns on small screens
  @media all and (max-width: ${QUERIES.mobileL}) {
    td:nth-last-child(-n + 2),
    th:nth-last-child(-n + 2) {
      display: none;
    }
  }

  @media all and (max-width: ${QUERIES.tablet}) {
    td,
    th {
      padding: 1rem 1rem;
    }
  }

  @media all and (max-width: ${QUERIES.laptop}) {
    font-size: 0.75rem;

    td,
    th {
      padding: 0.5rem 0.5rem;
    }
  }
`;

export const SNumber = styled.td`
  font-size: 0.8rem;
`;

export const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.alt};
`;

export const SSymbolField = styled.h3`
  margin: 0;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const SNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

export const SNameField = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const SPriceField = styled.td`
  font-weight: bold;
`;
