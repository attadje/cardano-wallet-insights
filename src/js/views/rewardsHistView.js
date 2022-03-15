class rewardsHistView {
  _rewardsHistory;
  _epochsHistory;
  _parentElem = document.querySelector(".rewardsHistory");

  _calcRewardAmount(rewards) {
    const sumRewards = rewards.reduce((pV, cV) => pV + cV, 0);
    return Number.parseFloat(sumRewards).toFixed(2);
  }

  _clear() {
    this._parentElem.innerHTML = "";
  }

  _generateMarkup() {
    return `<div class="card-header">
        <div class="row">
          <div class="col-sm-6 text-left">
            <h5 class="card-category">Rewards History</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary"></i>
              ${this._calcRewardAmount(this._rewardsHistory)}
            </h3>
          </div>
          <div class="col-sm-6">
            <div
              class="btn-group btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <label
                class="btn btn-sm btn-primary btn-simple active"
                id="mEpochs"
              >
                <input type="radio" name="options" checked />
                <span
                  class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                  >1 m</span
                >
                <span class="d-block d-sm-none">
                  <i class="tim-icons icon-single-02"></i>
                </span>
              </label>
              <label
                class="btn btn-sm btn-primary btn-simple"
                id="yEpochs"
              >
                <input
                  type="radio"
                  class="d-none d-sm-none"
                  name="options"
                />
                <span
                  class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                  >1 a</span
                >
                <span class="d-block d-sm-none">
                  <i class="tim-icons icon-gift-2"></i>
                </span>
              </label>
              <label
                class="btn btn-sm btn-primary btn-simple"
                id="allEpochs"
              >
                <input type="radio" class="d-none" name="options" />
                <span
                  class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                  >Max.</span
                >
                <span class="d-block d-sm-none">
                  <i class="tim-icons icon-tap-02"></i>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="chart-area">
          <canvas id="rewardsChart"></canvas>
        </div>
      </div>
    </div>
    </div>`;
  }

  generateChart(epochs, rewards) {
    this._rewardsHistory = rewards;
    this.epochsHistory = epochs;

    this._clear();
    this._parentElem.insertAdjacentHTML("afterbegin", this._generateMarkup());

    const ctx = document.getElementById("rewardsChart").getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    var config = {
      type: "line",
      data: {
        labels: epochs.slice(epochs.length - 18, epochs.length),
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
            data: rewards.slice(rewards.length - 18, rewards.length),
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
    var myChartData = new Chart(ctx, config);

    const threeMonthEpochs = (31 / 5) * 3;

    if (this._rewardsHistory.length < threeMonthEpochs) {
      const markup = ``;
    }

    document.querySelector("#mEpochs").addEventListener("click", function () {
      var chart_data = rewards.slice(rewards.length - 18, rewards.length);
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = epochs.slice(epochs.length - 18, epochs.length);
      myChartData.update();
    });

    document.querySelector("#allEpochs").addEventListener("click", function () {
      var data = myChartData.config.data;
      data.datasets[0].data = rewards;
      data.labels = epochs;
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

  _getLastEpochsRewards(nbOfEpochs) {
    // This function return the last x number of rewards
    return this._rewardsHistory.slice(
      this._rewardsHistory.length - nbOfEpochs,
      this._rewardsHistory
    );
  }

  _addMaxButton() {}
  _addYearButton() {}
  _addThreeMonthButton() {}
}

export default new rewardsHistView();
