// import Highcharts from 'highcharts';

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

export const gaugeOptions = {
  chart: {
    type: 'solidgauge',
  },
  title: {
    text: '',
  },

  credits: {
    enabled: false,
  },

  pane: {
    center: ['50%', '85%'],
    size: '150%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc',
    },
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 100,
    stops: [
      [0.1, '#DF5353'], // red
      [0.5, '#DDDF0D'], // yellow
      [0.8, '#55BF3B'], // green
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    // title: {
    //   y: -70,
    //   text: 'Votes',
    // },
    labels: {
      y: 16,
    },
  },
  series: [
    {
      name: 'Votes',
      data: [0],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y}</span><br/>' +
          '<span style="font-size:12px;opacity:0.4">Votes</span>' +
          '</div>',
      },
    },
  ],
  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
};
