import { User } from '@app/entities/user';

export interface CountProps {
  name?: string;
  email?: string;
  username?: string;
}
export abstract class UsersRepository {
  abstract count(props: CountProps): Promise<number>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
  abstract create(user: User): Promise<void>;
  abstract changePassword(id: string, password: string): Promise<void>;
}
