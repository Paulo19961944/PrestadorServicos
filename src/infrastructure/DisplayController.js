export default class DisplayController {
  constructor(element) {
    this.element = element;
  }

  show() {
    this.element.classList.add('aberto');
  }

  hide() {
    this.element.classList.remove('aberto');
  }

  toggle() {
    this.element.classList.toggle('aberto');
  }
}
