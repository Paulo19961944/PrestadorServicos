import criarMenuMobile from '../application/MenuFactoryMethod.js';

export default class MenuMobileController {
  constructor({ menuId, openButtonId, closeButtonId }) {
    const menuElement = document.getElementById(menuId);
    const openButton = document.getElementById(openButtonId);
    const closeButton = document.getElementById(closeButtonId);

    if (!menuElement || !openButton || !closeButton) {
      throw new Error('Elementos de interface não encontrados');
    }

    const menuMobile = criarMenuMobile(menuElement);

    openButton.addEventListener('click', () => {
      menuMobile.toggle();
    });

    closeButton.addEventListener('click', () => {
      menuMobile.toggle();
    });
  }
}
