export default class DeleteAccountHandler {
  constructor(userService) {
    this.userService = userService;
  }

  execute(userId, onDelete) {
    if (confirm('Tem certeza que deseja deletar sua conta?')) {
      this.userService.deleteUser(userId);
      onDelete();
    }
  }
}