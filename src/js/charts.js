import getMinimalData from './chart-config/minimal.js';
import getDonutData from './chart-config/donut.js';

const optionsWidgetOptions01 = getMinimalData(['#fff']);
const optionsWidgetOptions02 = getMinimalData(['#026df7']);
const optionsWidgetOptions03 = getMinimalData(['#026df7']);
const optionsDonutOptions01 = getDonutData(
  [21, 23, 19, 14],
  ['Accepted (188 - 56%)', 'Anonym (70 - 21%)', 'Declined (48 - 15%)', 'N/A (21 - 6%'],
  ['#00D8B6', '#008FFB', '#FEB019', '#FF4560']
);

const chartWidget01 = new ApexCharts(document.querySelector('#chart01'), optionsWidgetOptions01);
const chartWidget02 = new ApexCharts(document.querySelector('#chart02'), optionsWidgetOptions02);
const chartWidget03 = new ApexCharts(document.querySelector('#chart03'), optionsWidgetOptions03);
const chartDonut01 = new ApexCharts(document.querySelector('#donut01'), optionsDonutOptions01);

chartWidget01.render();
chartWidget02.render();
chartWidget03.render();
chartDonut01.render();

(() => {

  const optionsArea = {
    series: [{
      name: 'Yesterday',
      data: [31, 40, 28, 51, 42, 109, 100],
    }, {
      name: 'Today',
      data: [11, 32, 45, 32, 34, 52, 41],
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        width: 16,
        height: 16,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'datetime',
      categories: ['2023-05-19T00:00:00.000Z', '2023-05-19T01:30:00.000Z', '2023-05-19T02:30:00.000Z', '2023-05-19T03:30:00.000Z', '2023-05-19T04:30:00.000Z', '2023-05-19T05:30:00.000Z', '2023-05-19T06:30:00.000Z'],
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  const optionsBar = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        width: 16,
        height: 16,
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter(val) {
          return `$ ${val} thousands`;
        },
      },
    },
  };

  const chartArea = new ApexCharts(document.querySelector('#chart-area'), optionsArea);
  const chartBar = new ApexCharts(document.querySelector('#chart-bar'), optionsBar);
  chartArea.render();
  chartBar.render();
})();
