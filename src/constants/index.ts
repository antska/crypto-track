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

export const CHANGE_PERCENTAGES = [
  { name: '24h % Change', value: 'price_change_percentage_24h' },
  { name: '7d % Change', value: 'price_change_percentage_7d' },
  { name: '14d % Change', value: 'price_change_percentage_14d' },
  { name: '1m % Change', value: 'price_change_percentage_30d' },
  { name: '2m % Change', value: 'price_change_percentage_60d' },
  { name: '200d % Change', value: 'price_change_percentage_200d' },
  { name: '1y % Change', value: 'price_change_percentage_1y' },
];
