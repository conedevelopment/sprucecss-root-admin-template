import shuffle from '../shuffle.js';

export default function getMinimalData(colors) {
  const data = [
    47, 45, 54, 38, 56, 24,
    65, 31, 37, 39, 62, 51,
    35, 41, 35, 27, 93, 53,
    61, 27, 54, 43, 19, 46,
  ];

  const options = {
    chart: {
      type: 'area',
      height: 80,
      width: '100%',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      opacity: 0.75,
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.75,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    series: [{
      name: 'Profits',
      data: shuffle(data),
    }],
    labels: [...Array(24).keys()].map((n) => `2023-06-0${n + 1}`),
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
    },
    colors,
    tooltip: {
      enabled: true,
      marker: {
        show: false,
      },
    },
    grid: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };

  return options;
}
