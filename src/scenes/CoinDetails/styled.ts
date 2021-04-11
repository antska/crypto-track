import styled from 'styled-components';

export const SBoxContainer = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-bottom: 3rem;
  padding: 30px;
  width: 100%;
`;

export const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
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
