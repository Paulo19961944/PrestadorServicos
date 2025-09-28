export default class EditProfileHandler {
  constructor(userService) {
    this.userService = userService;
  }

  execute(userId, onUpdate) {
    const user = this.userService.fetchUserById(userId);
    if (!user) return;

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
      onUpdate();
    }
  }
}