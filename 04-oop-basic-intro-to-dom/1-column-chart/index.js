export default class ColumnChart {
  element = document.createElement("div");
  subElements = {};
  chartHeight = 50;

  constructor({
    data = [],
    label = "",
    link = "",
    value = 0,
    formatHeading = value => value
  } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = formatHeading(value);
    this.element.innerHTML = this.template;

    this.render();
  }

  render() {
    this.element = this.element.firstElementChild;
    if (this.data.length) {
      this.element.classList.remove("column-chart_loading");
    }

    this.subElements = this.getSubElements(this.element);
  }

  getSubElements(element) {
    const subElements = {};
    const dataElements = element.querySelectorAll('[data-element]');

    for (const dataElement of dataElements) {
      const name = dataElement.dataset.element;
      subElements[name] = dataElement;
    }

    return subElements;
  }

  getColumnBody(data) {
    const maxVal = Math.max(...data);
    const scaling = this.chartHeight / maxVal;
    
    const scaledColsHTML = data.map(colHeight => {
      const relHeight = (colHeight / maxVal * 100).toFixed(0);
      
      return `
        <div style="--value: ${Math.floor(colHeight * scaling)}" data-tooltip="${relHeight}%">
        </div>
        `;
    }).join("");

    return scaledColsHTML;
  }

  getLink() {
    return this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : '';
  }

  remove () {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
    this.subElements = {};
  }

  update(data) {
    this.subElements.body.innerHTML = this.getColumnBody(data);
  }

  get template() {
    return `
      <div class="column-chart column-chart_loading" style="--chart-height: ${this.chartHeight}";>
        <div class="column-chart__title">
          Total ${this.label}
          ${this.getLink()}
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">
            ${this.value}
          </div>
          <div data-element="body" class="column-chart__chart">
            ${this.getColumnBody(this.data)}
          </div>
        </div>
      </div>
    `;
  }
}
