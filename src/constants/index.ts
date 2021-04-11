import Highcharts from 'highcharts';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    primary: {
      main: '#DCDCDD',
      ligth: '#F5F5F5',
      gray: '#C5C3C6',
    },
    secondary: {
      main: '#4C5C68',
      alt: '#11586A',
    },
  },
};

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

  yAxis: {
    min: 0,
    max: 100,
    stops: [
      [0.1, '#DF5353'],
      [0.5, '#DDDF0D'],
      [0.8, '#55BF3B'],
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
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

export const priceGraphOptions: Highcharts.Options = {
  chart: {
    zoomType: 'x',
  },
  title: {
    text: 'Price Change Chart',
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    title: {
      text: 'Price (USD)',
    },
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, 'rgb(152,166,189)'],
          [1, 'rgba(191,203,210,0.59)'],
        ],
      },
      marker: {
        radius: 2,
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      threshold: null,
    },
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 425,
        },
        chartOptions: {
          yAxis: {
            labels: {
              align: 'left',
              x: 0,
              y: -5,
            },
          },
        },
      },
    ],
  },
  series: [
    {
      data: [],
      type: 'area',
      name: '',
      color: '#0f748e',
      tooltip: {
        valueDecimals: 2,
        valuePrefix: '$',
      },
    },
  ],
};
