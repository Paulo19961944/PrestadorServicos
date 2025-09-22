export default class ToggleMenuMobile {
  constructor(displayController) {
    this.displayController = displayController;
  }

  executar() {
    this.displayController.toggle();
  }
}
