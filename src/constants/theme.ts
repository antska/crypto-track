import { DefaultTheme } from 'styled-components';

export interface CustomTheme extends DefaultTheme {
  palette: {
    primary: { main: string; light: string; gray: string };
    secondary: { main: string; alt: string };
    textColor: string;
  };
}

export const defaultTheme: DefaultTheme = {
  colors: {
    lightgray: '#eaeaea',
    darkorange: '#ff8c00',
    lightorange: '#ffd400',
    palblue: '#1e90ff',
    lightblue: '#1ec1ff',
    coral: '#4c5c68',
  },
};

export const lightTheme: CustomTheme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: '#DCDCDD',
      light: '#F5F5F5',
      gray: '#C5C3C6',
    },
    secondary: {
      main: '#4C5C68',
      alt: '#11586A',
    },
    textColor: '#3D3D3E',
  },
};

export const darkTheme: CustomTheme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: '#3D3D3E',
      light: '#464646',
      gray: '#C5C3C6',
    },
    secondary: {
      main: '#eaeaea',
      alt: '#f5f5f5',
    },
    textColor: '#eaeaea',
  },
};
