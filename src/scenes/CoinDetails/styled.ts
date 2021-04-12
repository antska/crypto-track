import styled from 'styled-components';
import { queries } from '../../constants';

export const SBoxContainer = styled.div`
  background: ${({ theme }) => theme.palette.primary.light};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-bottom: 3rem;
  padding: 30px;
  overflow-x: auto;
  width: 100%;

  @media all and (max-width: ${queries.tablet}) {
    padding: 15px;
  }
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  @media all and (max-width: ${queries.tablet}) {
    gap: 3rem;
    align-items: center;
    flex-direction: column;
  }
`;

export const STable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;

  & td {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    padding: 1rem 1rem;
    text-align: end;
  }

  & th {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    padding: 1rem 1rem;
    text-align: left;
  }

  @media all and (max-width: ${queries.tablet}) {
    width: 100%;
  }
`;

export const SBoxTitle = styled.h2`
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.alt};
`;

export const SDescription = styled.p`
  a {
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.secondary.alt};
  }
`;

export const SMoreContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
