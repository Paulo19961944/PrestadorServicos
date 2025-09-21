export default class DisplayController {
  constructor(element) {
    this.element = element;
  }

  show() {
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }

  toggle() {
    const current = window.getComputedStyle(this.element).display;
    this.element.style.display = current === 'none' ? 'block' : 'none';
  }
}
