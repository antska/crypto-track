import styled from 'styled-components';

export const STableWrapper = styled.div`
  background: ${({ theme }) => theme.palette.primary.ligth};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 100%;
`;

export const STable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  & td {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    padding: 2rem;
  }

  & th {
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
    padding: 1rem 2rem;
    text-align: left;
  }

  & tbody > tr {
    cursor: pointer;

    &:last-child > td {
      border-bottom: none;
    }
  }
`;

export const SNumber = styled.td`
  font-size: 0.8rem;
`;

export const SH1 = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
