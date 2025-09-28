import UserService from '../services/UserService.js';
import PerfilView from './PerfilView.js';
import EditProfileHandler from '../application/EditProfileHandler.js';
import DeleteAccountHandler from '../application/DeleteAccountHandler.js';
import SwitchAccountHandler from '../application/SwitchAccountHandler.js';

export default class PerfilController {
  constructor(mainSelector = '#perfil') {
    this.main = document.querySelector(mainSelector);
    if (!this.main) {
      throw new Error(`Elemento com seletor "${mainSelector}" não encontrado.`);
    }

    this.userService = new UserService();
    this.editProfileHandler = new EditProfileHandler(this.userService);
    this.deleteAccountHandler = new DeleteAccountHandler(this.userService);
    this.switchAccountHandler = new SwitchAccountHandler();

    this.renderUserProfile('1');
  }

  renderUserProfile(userId) {
    const user = this.userService.fetchUserById(userId);
    if (user) {
      this.main.innerHTML = PerfilView.renderProfile(user);
      this.bindEvents(userId);
    } else {
      this.main.innerHTML = PerfilView.renderNoUserMessage();
    }
  }

  bindEvents(userId) {
    document.getElementById('edit-profile').addEventListener('click', () => {
      this.editProfileHandler.execute(userId, () => this.renderUserProfile(userId));
    });

    document.getElementById('switch-account').addEventListener('click', () => {
      this.switchAccountHandler.execute();
    });

    document.getElementById('delete-account').addEventListener('click', () => {
      this.deleteAccountHandler.execute(userId, () => {
        this.main.innerHTML = PerfilView.renderAccountDeletedMessage();
      });
    });
  }
}