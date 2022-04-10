export default class View {
  _clear() {
    this._parentElem.innerHTML = "";
  }

  _clearCardValue() {
    this._parentCardValueElem.innerHTML = "";
  }

  _clearCardBody() {
    this._parentCardBodyElem.innerHTML = "";
  }

  _clearCardButton() {
    this._parentCardeButtonElem.innerHTML = "";
  }

  renderSpiner() {
    const markup = `
    <div class="middle">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
    `;
    this._clear();
    this._parentElem.insertAdjacentHTML("beforeend", markup);
  }

  _renderCardValue(value) {
    this._clearCardValue();
    return `
      ${value}
  `;
  }

  _renderCardBody(htmlBody) {
    this._clearCardBody();
    return htmlBody;
  }

  _renderChart() {
    return `<canvas id="${this._classChartID}"></canvas>`;
  }

  _renderCardButton() {
    return `<label
              class="btn btn-sm btn-primary btn-simple active"
              id="mEpochs"
            >
              <input type="radio" name="options" checked />
              <span
                class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                >1 m</span
              >
              <span class="d-block d-sm-none">
                1 m
              </span>
          </label>`;
  }

  // _generateMarkupButtons(activate, classID, name) {
  //   return `<label
  //     class="btn btn-sm btn-primary btn-simple ${activate ? "activate" : ""}"
  //     id="${classID}"
  //   >
  //     <input type="radio" name="options" checked />
  //     <span
  //       class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
  //       >${name}</span
  //     >
  //     <span class="d-block d-sm-none">
  //       <i class="tim-icons icon-single-02"></i>
  //     </span>
  //   </label>`;
  // }
}
