import styled from 'styled-components';
import { queries } from '../../../../constants';

export const SH1 = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.secondary.main};

  @media all and (max-width: ${queries.mobileL}) {
    font-size: 1rem;
  }
`;

export const SSpan = styled.span`
  font-size: 0.75rem;
  font-style: italic;
`;

export const SWrapper = styled.nav`
  display: flex;
  align-self: normal;
  align-items: flex-end;
  justify-content: space-between;
  margin: 10px 0;
`;

export const SNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.palette.secondary.alt};

  a {
    display: flex;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.palette.primary.ligth};
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 5px;

    &:hover {
      border: none;
      transition: background-color 600ms;
      background: ${({ theme }) => theme.palette.secondary.main};
      color: white;
    }

    @media all and (max-width: ${queries.mobileL}) {
      padding: 1px;
    }
  }
`;
