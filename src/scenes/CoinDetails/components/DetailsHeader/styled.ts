import styled from 'styled-components';

export const STitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.palette.secondary.main};

  & > h1 {
    margin: 0;
    font-weight: 500;
  }
`;

export const SPriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const SContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin: 20px auto;
  width: 100%;
`;

export const SSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 0.85rem;
`;

export const SLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.alt};
  }
`;
