class rewardsHistView {
  _ctx = document.getElementById("chartBig1").getContext("2d");

  generateChart(epochs, rewards) {
    var gradientStroke = this._ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    var config = {
      type: "line",
      data: {
        labels: epochs,
        datasets: [
          {
            label: "Rewards",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#d346b1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d346b1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d346b1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: rewards,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },

        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(225,78,202,0.1)",
                zeroLineColor: "rgba(225,78,202,0.1)",
              },
              ticks: {
                // suggestedMin: 60,
                // suggestedMax: 125,
                padding: 20,
                fontColor: "#9a9a9a",
                callback: function (val, index) {
                  // Hide every 2nd tick label
                  return index % 2 === 0 ? val : "";
                },
              },
            },
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(225,78,202,0.0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a",
                callback: function (val, index) {
                  // Hide every 2nd tick label
                  return index % 4 === 0 ? val : "";
                },
              },
            },
          ],
        },
      },
    };
    var myChartData = new Chart(this._ctx, config);

    document.querySelector("#allEpochs").addEventListener("click", function () {
      var data = myChartData.config.data;
      data.datasets[0].data = rewards;
      data.labels = epochs;
      myChartData.update();
    });

    document.querySelector("#mEpochs").addEventListener("click", function () {
      var chart_data = rewards.slice(rewards.length - 18, rewards.length);
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = epochs.slice(epochs.length - 18, epochs.length);
      myChartData.update();
    });

    document.querySelector("#yEpochs").addEventListener("click", function () {
      var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });
  }
}

export default new rewardsHistView();
