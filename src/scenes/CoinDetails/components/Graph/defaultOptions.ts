import Highcharts from 'highcharts';

const defaultOptions: Highcharts.Options = {
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
  series: [
    {
      data: [],
      type: 'area',
      name: 'Bitcoin',
      color: '#0f748e',
      tooltip: {
        valueDecimals: 2,
        valuePrefix: '$',
      },
    },
  ],
};

export default defaultOptions;
