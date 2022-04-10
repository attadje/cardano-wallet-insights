import { lovelanceToAda, nbOfEpochs } from "../util";
import View from "./views";

class rewardsHistView extends View {
  _rewardsHistory;
  _epochsHistory;
  _classChartID = "rewardsHist";
  _parentElem = document.querySelector(".rewardsCardBody");
  _parentCardValueElem = document.querySelector(".amountOfReward");
  _parentCardBodyElem = document.querySelector(".rewardsCardBody");
  _parentCardeButtonElem = document.querySelector(".buttonRewardsHist");
  _buttonID = { oneMEpochs: 6, sixMEpochs: 36, oneYEpochs: 73, maxEpochs: 0 };
  _chartData;

  _calcRewardAmount(rewards) {
    const sumRewards = rewards.reduce((pV, cV) => pV + cV, 0);
    return Number.parseFloat(sumRewards).toFixed(2);
  }

  _renderRewardsChart() {
    return this._renderCardBody(`<canvas id="${this._classChartID}"></canvas>`);
  }

  generateChart(epochs, rewards) {
    // This method generate the chart for the rewards history

    this._rewardsHistory = rewards;
    this._epochsHistory = epochs;

    const rewardsAmount = this._calcRewardAmount(this._rewardsHistory);

    // Update the rewards amount
    this._parentCardValueElem.insertAdjacentHTML(
      "beforeend",
      this._renderCardValue(`₳ ${rewardsAmount}`)
    );

    // Render the chart of the rewards history in the body of the card
    this._parentCardBodyElem.insertAdjacentHTML(
      "afterbegin",
      this._renderCardBody(this._renderChart())
    );

    // Generate the button for selected the range history
    this._parentCardeButtonElem.insertAdjacentHTML(
      "afterbegin",
      this._renderCardButtonMarkup()
    );

    const ctx = document.getElementById(this._classChartID).getContext("2d");
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

        layout: {
          padding: 6,
        },

        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 10,
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
                zeroLineColor: "rgba(255,255,255,0)",
              },
              ticks: {
                beginAtZero: true,
                min: 0,
                suggestedMin: 0,
                // suggestedMax: 125,
                padding: 10,
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
                display: false,
                padding: 10,
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

    this._chartData = new Chart(ctx, config);

    this._addHandelerButton();

    // document.querySelector("#maxEpochs").addEventListener("click", function () {
    //   var chart_data = rewards.slice(
    //     this._rewardsHistory.length - 4,
    //     this._rewardsHistory.length
    //   );
    //   var data = myChartData.config.data;
    //   data.datasets[0].data = chart_data;
    //   data.labels = epochs.slice(
    //     this._rewardsHistory.length - 4,
    //     this._rewardsHistory.length
    //   );
    //   this._chartData.update();
    // });

    // document.querySelector("#allEpochs").addEventListener("click", function () {
    //   var data = myChartData.config.data;
    //   data.datasets[0].data = rewards;
    //   data.labels = epochs;
    //   myChartData.update();
    // });

    // document.querySelector("#yEpochs").addEventListener("click", function () {
    //   var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
    //   var data = myChartData.config.data;
    //   data.datasets[0].data = chart_data;
    //   data.labels = chart_labels;
    //   myChartData.update();
    // });
  }

  _teste(epochsRewarded) {
    const startEpoch =
      epochsRewarded == 0 ? 0 : this._rewardsHistory.length - epochsRewarded;
    const endEpoch = this._rewardsHistory.length;

    const data = this._rewardsHistory.slice(startEpoch, endEpoch);
    const chartData = this._chartData.config.data;

    chartData.datasets[0].data = data;
    chartData.labels = this._epochsHistory.slice(startEpoch, endEpoch);
    this._chartData.update();
  }

  _addHandelerButton() {
    Object.entries(this._buttonID).forEach(([classID, epochsRewarded]) => {
      const buttonElem = document.querySelector(`#${classID}`);

      if (!buttonElem) {
        return;
      }

      buttonElem.addEventListener(
        "click",
        this._teste.bind(this, epochsRewarded)
      );
    });
  }

  _renderCardButtonMarkup() {
    this._clearCardButton();
    return `
    <label
      class="btn btn-sm btn-primary btn-simple active"
      id="oneMEpochs"
    >
      <input type="radio" name="options" checked />
      <span
        class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
        >1 m</span
      >
      <span class="d-block d-sm-none">
        1 m
      </span>
    </label>
    <label
      class="btn btn-sm btn-primary btn-simple
      id="sixMEpochs" ${this._rewardsHistory > 365 / 5 / 2 ? "" : "disabled"}>
      <input
        type="radio"
        class="d-none d-sm-none"
        name="options"
      />
      <span
        class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
        >6 m</span
      >
      <span class="d-block d-sm-none">
        6 m
      </span>
    </label>
    <label
    class="btn btn-sm btn-primary btn-simple
    id="oneYEpochs" ${this._rewardsHistory > 365 / 5 ? "" : "disabled"}>
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
      1 a
    </span>
  </label>
    <label
      class="btn btn-sm btn-primary btn-simple"
      id="maxEpochs"
    >
      <input type="radio" class="d-none" name="options" />
      <span
        class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
        >Max.</span
      >
      <span class="d-block d-sm-none">
        Max.
      </span>
    </label>
    `;
  }
}

export default new rewardsHistView();
