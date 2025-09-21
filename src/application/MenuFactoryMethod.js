import Menu from '../domain/Menu.js';
import DisplayController from '../infrastructure/DisplayController.js';
import ToggleMenuMobile from './ToggleMenuMobile.js';

export default function criarMenuMobile(menuElement) {
  const menu = new Menu(menuElement);
  const display = new DisplayController(menu.element);
  const toggleUseCase = new ToggleMenuMobile(display);

  return {
    toggle: () => toggleUseCase.executar()
  };
}
