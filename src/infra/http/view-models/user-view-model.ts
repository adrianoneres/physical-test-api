import { User } from '@app/entities/user';

export class UserViewModel {
  static toHttp(user: User) {
    return {
      id: user.id,
      name: user.name.value,
      email: user.email.value,
      username: user.username.value,
      isAdmin: user.isAdmin,
    };
  }
}
