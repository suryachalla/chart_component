const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

  // Function to create the bar chart
  function createBarChart(data) {
    const chart = document.getElementById('nameWrapper');
    const xLabels = document.createElement('div');
    xLabels.className = 'x-axis';
    
    data.forEach(item => {
      const titleWrapper = document.getElementById("titleWrapper");
      
      const barTitles = document.createElement('div');
      barTitles.className = "barTitles";
      barTitles.textContent = `${item.amount.toFixed(2)}`;
      
      const barTitleContainer = document.createElement('div');
      barTitleContainer.className = 'barTitleContainer';
      
      titleWrapper.appendChild(barTitles);
    })
    
    data.forEach(item => {
      const barWrapper = document.getElementById("barWrapper");
      const barContainer = document.createElement('div');
      barContainer.className = 'bar-container';

      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${item.amount*5}px`;
      bar.title = `${item.day}: ${item.amount.toFixed(2)}`;

      const xLabel = document.createElement('div');
      xLabel.className = 'x-label';
      xLabel.textContent = item.day;

      barContainer.appendChild(bar);
      xLabels.appendChild(xLabel);
      barWrapper.appendChild(barContainer);
    });
    chart.appendChild(xLabels);
  }

  // Create the bar chart
  createBarChart(data);