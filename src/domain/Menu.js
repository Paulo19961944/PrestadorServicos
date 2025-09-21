export default class Menu {
  constructor(element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error('Elemento inválido');
    }
    this.element = element;
  }
}
