export const queries = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const FETCH_INTERVAL_MS = 30000;

export const BASE_API_ENDPOINT = 'https://api.coingecko.com/api/v3';

export const CHART_RANGES = [
  {
    name: '1d',
    value: 1,
  },
  {
    name: '30d',
    value: 30,
  },
  {
    name: '90d',
    value: 90,
  },
  {
    name: '180d',
    value: 180,
  },
  {
    name: 'max',
    value: 'max',
  },
];
