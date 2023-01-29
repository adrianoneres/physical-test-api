import { Email } from '@app/entities/email';
import { Name } from '@app/entities/name';
import { Password } from '@app/entities/password';
import { User, UserProps } from '@app/entities/user';
import { Username } from '@app/entities/username';
import { BCryptHashAdapter } from '@infra/hash/bcrypt/bcrypt-hash-adapter';

type Override = Partial<UserProps>;

export async function makeUser(override: Override = {}) {
  const hashAdapter = new BCryptHashAdapter();
  const passwordHash = await hashAdapter.generate('123456');

  return new User({
    name: new Name('John Doe'),
    email: new Email('johndoe@email.com'),
    username: new Username('johndoe'),
    password: new Password(passwordHash),
    ...override,
  });
}
