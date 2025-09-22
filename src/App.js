import MenuMobileController from './interface/MenuMobileController.js';
import renderSections from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  new MenuMobileController({
    menuId: 'menu',
    openButtonId: 'menu-hamburguer',
    closeButtonId: 'menu-fechar',
  });
  
  renderSections();
});
