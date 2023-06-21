import getData from './chart-config/minimal.js';

const optionsWidgetOptions01 = getData(['#fff']);
const optionsWidgetOptions02 = getData(['#026df7']);
const optionsWidgetOptions03 = getData(['#026df7']);

const chartWidget01 = new ApexCharts(document.querySelector('#chart01'), optionsWidgetOptions01);
const chartWidget02 = new ApexCharts(document.querySelector('#chart02'), optionsWidgetOptions02);
const chartWidget03 = new ApexCharts(document.querySelector('#chart03'), optionsWidgetOptions03);

chartWidget01.render();
chartWidget02.render();
chartWidget03.render();


(() => {
  const randomizeArray = function (arg) {
    const array = arg.slice();
    let currentIndex = array.length; let temporaryValue; let
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // data for the sparklines that appear below header area
  const sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

  // the default colorPalette for this dashboard
  // var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
  const colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

  const optionsWidget = {
    chart: {
      id: 'sparkline3',
      group: 'sparklines',
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
      type: "gradient",
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
      data: randomizeArray(sparklineData),
    }],
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
    },
    colors: ['#fff'],
    tooltip: {
      enabled: true,
    },
    grid: {
      padding: {
          top: 10,
          bottom: 10,
      },
    }
  };

  const optionsWidget2 = {
    chart: {
      id: 'sparkline3',
      group: 'sparklines',
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
      type: "gradient",
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
      data: randomizeArray(sparklineData),
    }],
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
    },
    colors: ['#026df7'],
    tooltip: {
      enabled: true,
    },
  };

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

  const optionDonut = {
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
        filter: 'none'
      }
    },
    colors: colorPalette,
    series: [21, 23, 19, 14],
    labels: ['Accepted (188 - 56%)', 'Anonym (70 - 21%)', 'Declined (48 - 15%)', 'N/A (21 - 6%'],
    legend: {
      position: 'bottom',
      markers: {
        width: 20,
        height: 20,
      },
    }
  }

  var donut = new ApexCharts(
    document.querySelector("#donut"),
    optionDonut
  )
  donut.render();


  const chartArea = new ApexCharts(document.querySelector('#chart-area'), optionsArea);
  const chartBar = new ApexCharts(document.querySelector('#chart-bar'), optionsBar);
  chartArea.render();
  chartBar.render();
})();
