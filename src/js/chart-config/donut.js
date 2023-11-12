export default function getDonutData(series, labels, colors) {
  const options = {
    chart: {
      type: 'donut',
      height: 300,
      width: '100%',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: '65%',
        },
      },
    },
    stroke: {
      width: 0,
    },
    states: {
      hover: {
        filter: 'none',
      },
    },
    colors,
    series,
    labels,
    legend: {
      position: 'bottom',
      markers: {
        width: 20,
        height: 20,
      },
    },
  };

  return options;
}
