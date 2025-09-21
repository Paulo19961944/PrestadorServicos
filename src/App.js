import MenuMobileController from './src/interface/MenuMobileController.js';

document.addEventListener('DOMContentLoaded', () => {
  new MenuMobileController({
    menuId: 'menuMobile',
    botaoId: 'botaoMenu'
  });
});
