import { User } from '@app/entities/user';

export abstract class UsersRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
  abstract create(user: User): Promise<void>;
  abstract changePassword(id: string, password: string): Promise<void>;
}
