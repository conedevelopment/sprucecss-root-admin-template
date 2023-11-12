import getMinimalData from './chart-config/minimal.js';
import getDonutData from './chart-config/donut.js';
import getBarData from './chart-config/bar.js';
import getAreaData from './chart-config/area.js';

const optionsWidgetOptions01 = getMinimalData(['#fff']);
const optionsWidgetOptions02 = getMinimalData(['#026df7']);
const optionsWidgetOptions03 = getMinimalData(['#026df7']);
const optionsDonutOptions01 = getDonutData(
  [21, 23, 19, 14],
  ['Accepted (188 - 56%)', 'Anonym (70 - 21%)', 'Declined (48 - 15%)', 'N/A (21 - 6%'],
  ['#00D8B6', '#008FFB', '#FEB019', '#FF4560'],
);
const optionsBarOptions01 = getBarData(
  [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  }],
  ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
);
const optionsAreaOptions01 = getAreaData(
  [{
    name: 'Yesterday',
    data: [31, 40, 28, 51, 42, 109, 100],
  }, {
    name: 'Today',
    data: [11, 32, 45, 32, 34, 52, 41],
  }],
  ['2023-05-19T00:00:00.000Z', '2023-05-19T01:30:00.000Z', '2023-05-19T02:30:00.000Z', '2023-05-19T03:30:00.000Z', '2023-05-19T04:30:00.000Z', '2023-05-19T05:30:00.000Z', '2023-05-19T06:30:00.000Z'],
);

if (document.querySelector('#chart01')) {
  const chartWidget01 = new ApexCharts(document.querySelector('#chart01'), optionsWidgetOptions01);
  chartWidget01.render();
}

if (document.querySelector('#chart02')) {
  const chartWidget02 = new ApexCharts(document.querySelector('#chart02'), optionsWidgetOptions02);
  chartWidget02.render();
}

if (document.querySelector('#chart03')) {
  const chartWidget03 = new ApexCharts(document.querySelector('#chart03'), optionsWidgetOptions03);
  chartWidget03.render();
}

if (document.querySelector('#donut01')) {
  const chartDonut01 = new ApexCharts(document.querySelector('#donut01'), optionsDonutOptions01);
  chartDonut01.render();
}

if (document.querySelector('#bar01')) {
  const chartBar01 = new ApexCharts(document.querySelector('#bar01'), optionsBarOptions01);
  chartBar01.render();
}

if (document.querySelector('#area01')) {
  const chartArea01 = new ApexCharts(document.querySelector('#area01'), optionsAreaOptions01);
  chartArea01.render();
}
