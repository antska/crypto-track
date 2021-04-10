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
