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
    },
    stroke: {
      show: true,
      width: 2,
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
