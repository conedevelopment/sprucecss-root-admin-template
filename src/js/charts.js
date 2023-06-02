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
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'datetime',
      categories: ['2023-05-19T00:00:00.000Z', '2023-05-19T01:30:00.000Z', '2023-05-19T02:30:00.000Z', '2023-05-19T03:30:00.000Z', '2023-05-19T04:30:00.000Z', '2023-05-19T05:30:00.000Z', '2023-05-19T06:30:00.000Z'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  const optionsBar = {
    series: [
      {
        name: 'Q1 Budget',
        group: 'budget',
        data: [44000, 55000, 41000],
      },
      {
        name: 'Q1 Actual',
        group: 'actual',
        data: [48000, 50000, 40000],
      },
      {
        name: 'Q2 Budget',
        group: 'budget',
        data: [13000, 36000, 20000],
      },
      {
        name: 'Q2 Actual',
        group: 'actual',
        data: [20000, 40000, 25000],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      formatter: (val) => `${val / 1000}K`,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: [
        'Online advertising',
        'Sales Training',
        'Print advertising',
        'Catalogs',
        'Meetings',
        'Public relations',
      ],
    },
    fill: {
      opacity: 1,
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    yaxis: {
      labels: {
        formatter: (val) => `${val / 1000}K`,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
  };

  const chartArea = new ApexCharts(document.querySelector('#chart-area'), optionsArea);
  const chartBar = new ApexCharts(document.querySelector('#chart-bar'), optionsBar);
  chartArea.render();
  chartBar.render();
})();
