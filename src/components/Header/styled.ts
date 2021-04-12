import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRegMoon } from 'react-icons/fa';
import { CgSun } from 'react-icons/cg';

export const SIconSun = styled(CgSun)`
  color: ${({ theme }) => theme.colors.darkorange};

  &:hover {
    color: ${({ theme }) => `${theme.colors.lightorange}`};
  }
`;

export const SIconMoon = styled(FaRegMoon)`
  color: ${({ theme }) => theme.colors.palblue};

  &:hover {
    color: ${({ theme }) => `${theme.colors.lightblue}`};
  }
`;

export const SNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.coral};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 20px 20px;
`;

export const SRightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;

  svg {
    cursor: pointer;
  }

  svg:active {
    transition: all 1500ms;
    transform: rotate(-180);
  }
`;

export const SLink = styled(Link)`
  font-size: 2rem;
  color: white;
  text-decoration: none;
`;
