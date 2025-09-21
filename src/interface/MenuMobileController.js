import criarMenuMobile from '../application/MenuMobileFactory.js';

export default class MenuMobileController {
  constructor({ menuId, botaoId }) {
    const menuElement = document.getElementById(menuId);
    const botao = document.getElementById(botaoId);

    if (!menuElement || !botao) {
      throw new Error('Elementos de interface não encontrados');
    }

    const menuMobile = criarMenuMobile(menuElement);

    botao.addEventListener('click', () => {
      menuMobile.toggle();
    });
  }
}
