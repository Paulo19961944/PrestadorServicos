export default class PerfilView {
  static renderProfile(user) {
    return `
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
  }

  static renderNoUserMessage() {
    return `<p>Usuário não encontrado.</p>`;
  }

  static renderAccountDeletedMessage() {
    return `<p>Conta deletada com sucesso.</p>`;
  }
}