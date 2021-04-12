export const LOCALSTORAGE_KEY = 'cryptotrack';

export const QUERIES = {
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
    name: '14d',
    value: 14,
  },
  {
    name: '1m',
    value: 30,
  },
  {
    name: '3m',
    value: 90,
  },
  {
    name: '1y',
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

export const SOCIAL_STATS = [
  { name: 'Facebook likes', value: 'facebook_likes' },
  { name: 'Twitter followers', value: 'twitter_followers' },
  { name: 'Reddit subscribers', value: 'reddit_subscribers' },
  { name: 'Telegram users', value: 'telegram_channel_user_count' },
];

export const DEVELOPER_STATS = [
  { name: 'Forks', value: 'forks' },
  { name: 'Stars', value: 'stars' },
  { name: 'Subscribers', value: 'subscribers' },
  { name: 'Total issues', value: 'total_issues' },
  { name: 'Closed issues', value: 'closed_issues' },
];
