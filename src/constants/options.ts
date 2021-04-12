import Highcharts from 'highcharts';

export const gaugeOptions = {
  chart: {
    type: 'solidgauge',
    backgroundColor: 'white',
  },
  title: {
    text: '',
    style: {},
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
