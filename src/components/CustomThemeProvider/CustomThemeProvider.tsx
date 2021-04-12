import React from 'react';
import { useSelector } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { getTheme } from 'store/global/selectors';
import { CustomTheme, darkTheme, lightTheme } from 'constants/theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }
  
  body {
    background: ${({ theme }: { theme: CustomTheme }) =>
      theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.textColor};
    margin: 0;
    font-family: 'Avant Garde', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const mode = useSelector(getTheme());

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
