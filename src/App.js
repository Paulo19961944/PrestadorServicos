import MenuMobileController from './interface/MenuMobileController.js';
import renderSections from './homepage.js';
import renderPerfilSection from './perfil.js';

document.addEventListener('DOMContentLoaded', () => {
  new MenuMobileController({
    menuId: 'menu',
    openButtonId: 'menu-hamburguer',
    closeButtonId: 'menu-fechar',
  });

  if (document.querySelector('#homepage')) {
    renderSections();
  }
  if (document.querySelector('#perfil')) {
    renderPerfilSection();
  }
});