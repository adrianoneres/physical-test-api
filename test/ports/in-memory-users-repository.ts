import { User } from '@app/entities/user/user';
import { UsersRepository } from '@app/ports/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async findByUsername(username: string): Promise<User | null> {
    return this.users.find(user => user.username.value === username) || null;
  }

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
