import UserService from '../services/UserService.js';

export default class PerfilController {
  constructor(mainSelector = '#perfil') {
    this.main = document.querySelector(mainSelector);
    this.userService = new UserService();
  }

  renderUserProfile(userId = '1') {
    const user = this.userService.fetchUserById(userId);
    if (!user) return;

    this.main.innerHTML = `
      <section class="perfil-container perfil-grande">
        <div class="perfil-foto">
          <img src="${user.photoUrl}" alt="Foto de perfil" />
        </div>
        <div class="perfil-info">
          <h2>${user.name}</h2>
          <p class="perfil-funcao">${user.role}</p>
          <p class="perfil-telefone"><strong>Telefone:</strong> ${user.phone}</p>
          <p class="perfil-descricao">${user.description}</p>
          <div class="perfil-actions">
            <button id="edit-profile" class="perfil-btn">Editar Informações</button>
            <button id="switch-account" class="perfil-btn">Trocar de Conta</button>
            <button id="delete-account" class="perfil-btn perfil-btn-danger">Deletar Conta</button>
          </div>
        </div>
      </section>
    `;

    document.getElementById('edit-profile').onclick = () => this.editProfile(user.id);
    document.getElementById('switch-account').onclick = () => this.switchAccount();
    document.getElementById('delete-account').onclick = () => this.deleteAccount(user.id);
  }

  editProfile(userId) {
    const user = this.userService.fetchUserById(userId);
    const newName = prompt('Novo nome:', user.name);
    const newRole = prompt('Nova função:', user.role);
    const newPhone = prompt('Novo telefone:', user.phone);
    const newDescription = prompt('Nova descrição:', user.description);
    if (newName && newRole && newPhone && newDescription) {
      this.userService.updateUser(userId, {
        name: newName,
        role: newRole,
        phone: newPhone,
        description: newDescription
      });
      this.renderUserProfile(userId);
    }
  }

  switchAccount() {
    alert('Funcionalidade de troca de conta não implementada.');
    // Aqui você pode redirecionar para a tela de login ou seleção de conta
  }

  deleteAccount(userId) {
    if (confirm('Tem certeza que deseja deletar sua conta?')) {
      this.userService.deleteUser(userId);
      this.main.innerHTML = `<p>Conta deletada com sucesso.</p>`;
    }
  }
}