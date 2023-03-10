import { User as RawUser } from '@prisma/client';

import { User } from '@app/entities/user';
import { Name } from '@app/entities/name';
import { Email } from '@app/entities/email';
import { Username } from '@app/entities/username';
import { Password } from '@app/entities/password';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name.value,
      email: user.email.value,
      username: user.username.value,
      password: user.password.value,
      isAdmin: user.isAdmin,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        name: new Name(raw.name),
        email: new Email(raw.email),
        username: new Username(raw.username),
        password: new Password(raw.password),
        isAdmin: raw.isAdmin,
      },
      raw.id,
    );
  }
}
