import MenuMobileController from './interface/MenuMobileController.js';

document.addEventListener('DOMContentLoaded', () => {
  new MenuMobileController({
    menuId: 'menu',
    openButtonId: 'menu-hamburguer',
    closeButtonId: 'menu-fechar',
  });
});
