export default class ToggleMenuMobile {
  constructor(displayController) {
    this.display = displayController;
  }

  executar() {
    this.display.toggle();
  }
}
