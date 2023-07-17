class BaseClass {
  element;

  initialize() {
    this.render();
    this.createListeners();
  }

  createListeners() {}

  destroyListeners() {}

  render() {
    this.element = this.createElement(this.getTemplate());
  }

  getTemplate() {
    return ``;
  }

  update() {}

  remove() {
    this.element = null;
  }

  destroy() {
    this.remove();
    this.destroyListeners();
  }

  createElement(template) {
    const divElement = document.createElement("div");
    divElement.innerHTML = template;
    return divElement.firstElementChild;
  }
}

export default BaseClass;