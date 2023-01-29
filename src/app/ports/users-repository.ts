import { User } from '@app/entities/user/user';

export abstract class UsersRepository {
  abstract findByUsername(username: string): Promise<User | null>;
  abstract create(user: User): Promise<void>;
}
