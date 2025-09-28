import User from '../models/User.js';

export default class UserService {
  constructor() {
    this.users = [
      new User(
        '1',
        'João Silva de Oliveira Mattos',
        'Desenvolvedor Frontend',
        '(11) 91234-5678',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://instagram.com/joaosilva',
        'https://linkedin.com/in/joaosilva',
        'https://wa.me/5511912345678',
        'joao@email.com',
        'Especialista em desenvolvimento de interfaces modernas e responsivas para web, com experiência em React, Vue e Angular.'
      ),
      // outros usuários...
    ];
  }

  fetchUserById(id) {
    return this.users.find(user => user.id === id);
  }

  updateUser(id, { name, role, phone, photoUrl, instagram, linkedin, whatsapp, email, description }) {
    const user = this.fetchUserById(id);
    if (user) {
      user.name = name || user.name;
      user.role = role || user.role;
      user.phone = phone || user.phone;
      user.photoUrl = photoUrl || user.photoUrl;
      user.instagram = instagram || user.instagram;
      user.linkedin = linkedin || user.linkedin;
      user.whatsapp = whatsapp || user.whatsapp;
      user.email = email || user.email;
      user.description = description || user.description;
    }
  }

  deleteUser(id) {
    this.users = this.users.filter(user => user.id !== id);
  }
}