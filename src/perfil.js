import PerfilController from './controllers/PerfilController.js';

export default function renderPerfilSection() {
  const perfilController = new PerfilController();
  perfilController.renderUserProfile('1');
}