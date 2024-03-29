import { Password } from '@app/entities/password';
import { User } from '@app/entities/user';
import { CountProps, UsersRepository } from '@app/ports/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  count(_: CountProps): Promise<number> {
    return Promise.resolve(this.users.length);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.users.find(user => user.username.value === username) || null;
  }

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async changePassword(id: string, password: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);
    this.users[userIndex].password = new Password(password);
  }
}
